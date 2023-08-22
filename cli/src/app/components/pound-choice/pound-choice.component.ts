import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { NumberOnlyDirective } from "src/app/directives/number-only.directive";
import { MatCardModule } from "@angular/material/card";

@Component({
  selector: "app-pound-choice",
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    NumberOnlyDirective,
  ],
  templateUrl: "./pound-choice.component.html",
  styleUrls: ["./pound-choice.component.css"],
})
export class PoundChoiceComponent implements OnInit {
  readonly fixedAmounts = [5, 20, 50, 100];

  @Input({ required: true }) selectedAmount!: number | null;
  @Output() selectedAmountChange = new EventEmitter<number | null>();
  customAmount = new FormControl("");

  @Output() nextEvent = new EventEmitter();

  ngOnInit(): void {
    if (
      this.selectedAmount !== null &&
      !this.fixedAmounts.includes(this.selectedAmount)
    ) {
      this.customAmount.setValue(this.selectedAmount.toString());
    }
  }

  changeSelectedAmount(amount: number) {
    this.customAmount.reset();

    this.selectedAmount = amount;
    this.selectedAmountChange.emit(this.selectedAmount);
  }

  onInputFocus() {
    this.selectedAmount = null;
    this.selectedAmountChange.emit(null);
  }

  onInputChange(input: string) {
    const amount = parseInt(input);

    this.selectedAmount = amount;
    this.selectedAmountChange.emit(amount);
  }

  onNextClick() {
    this.nextEvent.emit();
  }
}
