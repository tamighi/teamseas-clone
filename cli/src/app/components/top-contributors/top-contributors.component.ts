import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DonationService } from "src/app/services/donation.service";
import { Donation } from "src/app/interfaces/donation";
import { MatCardModule } from "@angular/material/card";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { PageEvent, MatPaginatorModule } from "@angular/material/paginator";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-top-contributors",
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonToggleModule,
    MatPaginatorModule,
    FormsModule,
  ],
  templateUrl: "./top-contributors.component.html",
  styleUrls: ["./top-contributors.component.css"],
})
export class TopContributorsComponent implements OnInit {

  donations: Donation[] = [];
  page = 1;
  filter = "recent";
  nbDonation = 0;
  pageSize = 10;

  constructor(private donationService: DonationService) {}

  ngOnInit(): void {
    this.fetchDonations();
  }

  handlePageEvent(e: PageEvent) {
    this.page = e.pageIndex + 1;
    this.fetchDonations();
  }

  async fetchDonations() {
    const order =
      this.filter === "recent"
        ? { createdAt: "desc" as "desc" }
        : { count: "desc" as "desc" };
    const page = this.page;

    const data = await this.donationService.getAllDonations({
      order,
      page,
    });

    // error management
    if (!data) return ;

    this.donations = data.data;
    this.nbDonation = data.count;
  }

  onFilterClick(filter: string) {
    if (this.filter === filter) {
      return;
    }

    this.page = 1;
    this.filter = filter;
    this.fetchDonations();
  }
}
