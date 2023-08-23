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

  constructor() {}

  async getTotalDonationCount() {
    const data = await fetch(this.backendUrl + "/total");
    return data.json();
  }

  async getAllDonations(options: QueryOptions = {}) {
    const { order = {}, page } = options;

    let query = "";

    Object.keys(order).forEach((key, i) => {
      const value = order[key as keyof typeof order];
      if (i > 0) {
        query += "&";
      }
      query += `order[${key}]=${value}`
    })

    const url = `${this.backendUrl}?${query}`;

    try {
      const data = await fetch(url);
      const json = await data.json();
      return json["hydra:member"];
    } catch (e: unknown) {
      console.log(e);
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
}
