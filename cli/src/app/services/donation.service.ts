import { Injectable } from "@angular/core";
import { Donation } from "../interfaces/donation";

@Injectable({
  providedIn: "root",
})
export class DonationService {
  backendUrl = "http://localhost:8000/api/donations";

  constructor() {}

  getDonations() {
    const donations: Donation[] = [...Array(10)].map((_, i) => {
      return {
        displayName: "name" + i,
        email: "mail@" + i + ".com",
        count: i * 10,
        team: "myTeam",
        mobile: "00323232",
        message: "Hello World",
        createdAt: new Date(),
      };
    });

    return donations;
  }

  async getTotalDonationCount() {
    const data = await fetch(this.backendUrl + "/total");
    return data.json();
  }

  async getAllDonations() {
    const data = await fetch(this.backendUrl);
    const json = await data.json();
    return json["hydra:member"];
  }
}
