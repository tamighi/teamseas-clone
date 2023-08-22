import { Component, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { PoundChoiceComponent } from "../pound-choice/pound-choice.component";
import { MatButtonModule } from "@angular/material/button";
import { ContributeFormComponent } from "../contribute-form/contribute-form.component";
import { FormControl, FormGroup } from "@angular/forms";

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
    displayName: new FormControl(""),
    email: new FormControl(""),
    team: new FormControl(""),
    mobile: new FormControl(""),
    message: new FormControl(""),
  });

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

  onSubmit() {
    console.log(this.donationForm.value, this.selectedAmount)
  }
}
