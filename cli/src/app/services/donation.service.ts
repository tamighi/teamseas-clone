import { Injectable } from "@angular/core";
import { Donation } from "../interfaces/donation";

type QueryOptions = {
  order?: {
    count?: "desc";
    createdAt?: "desc";
  };
  page?: number;
};

@Injectable({
  providedIn: "root",
})
export class DonationService {
  backendUrl = "http://localhost:8000/api/donations";
  mercureUrl = "http://localhost:8002/.well-known/mercure";

  constructor() {}

  async getTotalDonationCount() {
    const data = await fetch(this.backendUrl + "/total");
    return data.json();
  }

  async getAllDonations(options: QueryOptions = {}) {
    const { order = {}, page } = options;

    // Query management

    let query = "";

    Object.keys(order).forEach((key, i) => {
      const value = order[key as keyof typeof order];
      if (i > 0) {
        query += "&";
      }
      query += `order[${key}]=${value}`;
    });

    if (page !== undefined) {
      query += `&page=${page}`;
    }

    // Fetch

    const url = `${this.backendUrl}?${query}`;

    try {
      const res = await fetch(url);
      const json = await res.json();
      const data = {
        count: json["hydra:totalItems"],
        data: json["hydra:member"]
      }
      return data;
    } catch (e: unknown) {
      console.log(e);
      return null;
    }
  }

  async postDonation(donation: Donation) {
    try {
      const headers = new Headers();
      headers.set("Content-Type", "application/json");
      return fetch(this.backendUrl, {
        method: "POST",
        body: JSON.stringify(donation),
        headers,
      });
    } catch (error: unknown) {
      console.log(error);
      return undefined;
    }
  }

  subscribe(callback: (donation: Donation) => void) {
    const url = new URL(this.mercureUrl);
    url.searchParams.append("topic", "donations");
    const eventSource = new EventSource(url);
    eventSource.onmessage = (event) => {
      const data: Donation = JSON.parse(event.data);
      callback(data);
    };
  }
}
