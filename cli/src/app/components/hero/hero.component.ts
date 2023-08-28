import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CommaFormatPipe } from "src/app/pipes/CommaFormat.pipe";
import { DonationService } from "src/app/services/donation.service";
import { Donation } from "src/app/interfaces/donation";

@Component({
  selector: "app-hero",
  standalone: true,
  imports: [CommonModule, CommaFormatPipe],
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.css"],
})
export class HeroComponent implements OnInit {
  count = 0;

  constructor(
    private donationService: DonationService,
    private changeDetectorRef: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.fetchCount();
    this.donationService.subscribe((data) => this.addDonation(data));
  }

  addDonation(donation: Donation) {
    this.count += donation.count;
    this.changeDetectorRef.detectChanges();
  }

  async fetchCount() {
    const json = await this.donationService.getTotalDonationCount();
    this.count = json.count;
  }
}
