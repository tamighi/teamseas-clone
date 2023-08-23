import { Injectable } from "@angular/core";
import { Donation } from "../interfaces/donation";

@Injectable({
  providedIn: "root",
})
export class DonationService {
  constructor() { }

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
}
