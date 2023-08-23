import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DonationService } from "src/app/services/donation.service";
import { Donation } from "src/app/interfaces/donation";
import { MatCardModule } from "@angular/material/card";
import { MatButtonToggleModule } from "@angular/material/button-toggle";

@Component({
  selector: "app-top-contributors",
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonToggleModule],
  templateUrl: "./top-contributors.component.html",
  styleUrls: ["./top-contributors.component.css"],
})
export class TopContributorsComponent implements OnInit {
  public donations: Donation[] = [];

  constructor(private donationService: DonationService) {}

  ngOnInit(): void {
    this.fetchDonations();
  }

  async fetchDonations() {
    this.donations = await this.donationService.getAllDonations();
  }
}
