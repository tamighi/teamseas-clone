import { Injectable } from "@angular/core";
import { Donation } from "../interfaces/donation";

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

  async getAllDonations() {
    const data = await fetch(this.backendUrl);
    const json = await data.json();
    return json["hydra:member"];
  }

  async postDonation(donation: Donation) {
    try {
      const headers = new Headers();
      headers.set("Content-Type", "application/json");
      return fetch(this.backendUrl, {
        method: "POST",
        body: JSON.stringify(donation),
        headers
      });
    } catch (error: unknown) {
      console.log(error);
      return undefined;
    }
  }
}
