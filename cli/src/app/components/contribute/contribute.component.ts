import { Component, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { PoundChoiceComponent } from "../pound-choice/pound-choice.component";
import { MatButtonModule } from "@angular/material/button";
import { ContributeFormComponent } from "../contribute-form/contribute-form.component";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Donation } from "src/app/interfaces/donation";
import { DonationService } from "src/app/services/donation.service";

@Component({
  selector: "app-contribute",
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    PoundChoiceComponent,
    ContributeFormComponent,
  ],
  templateUrl: "./contribute.component.html",
  styleUrls: ["./contribute.component.css"],
})
export class ContributeComponent implements OnInit {
  selectedAmount: number | null = 20;

  @ViewChild("container", { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  donationForm = new FormGroup({
    displayName: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    team: new FormControl(""),
    mobile: new FormControl(""),
    message: new FormControl(""),
  });

  constructor(private donationService: DonationService) {}

  ngOnInit(): void {
    this.createPoundChoiceComponent();
  }

  createPoundChoiceComponent(): void {
    this.container.clear();
    const element = this.container.createComponent(PoundChoiceComponent);
    element.instance.selectedAmountChange.subscribe(
      (val) => (this.selectedAmount = val),
    );
    element.instance.nextEvent.subscribe(() => this.onPoundChoiceNext());
    element.setInput("selectedAmount", this.selectedAmount);
  }

  createFormComponent(): void {
    this.container.clear();
    const element = this.container.createComponent(ContributeFormComponent);
    element.instance.previousEvent.subscribe(() => this.onFormPrevious());
    element.instance.submitEvent.subscribe(() => this.onSubmit());
    element.setInput("donationForm", this.donationForm);
  }

  onPoundChoiceNext() {
    this.createFormComponent();
  }

  onFormPrevious() {
    this.createPoundChoiceComponent();
  }

  async onSubmit() {
    if (!this.selectedAmount) {
      this.createPoundChoiceComponent();
      return;
    }
    if (!this.donationForm.valid) return;

    const donation: Donation = {
      ...(this.donationForm.value as Omit<Donation, "count">),
      ...{ count: this.selectedAmount },
    };

    const data = await this.donationService.postDonation(donation);

    if (!data) {
      alert("An error has occured...");
      return ;
    }

    this.donationForm.reset();
    this.selectedAmount = 20;
    alert("Thank you !");
  }
}
