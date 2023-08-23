import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CommaFormatPipe } from "src/app/pipes/CommaFormat.pipe";
import { DonationService } from "src/app/services/donation.service";

@Component({
  selector: "app-hero",
  standalone: true,
  imports: [CommonModule, CommaFormatPipe],
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.css"],
})
export class HeroComponent implements OnInit {
  count = 0;

  constructor(private donationService: DonationService) {}

  ngOnInit(): void {
    this.fetchCount();
  }

  async fetchCount() {
    const json = await this.donationService.getTotalDonationCount();
    this.count = json.count;
  }
}
