import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { InputComponent } from "../input/input.component";
import { TextAreaComponent } from "../text-area/text-area.component";

@Component({
  selector: "app-contribute-form",
  standalone: true,
  imports: [
    CommonModule,
    InputComponent,
    TextAreaComponent,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
  ],
  templateUrl: "./contribute-form.component.html",
  styleUrls: ["./contribute-form.component.css"],
})
export class ContributeFormComponent {
  @Input() donationForm!: FormGroup;

  @Output() submitEvent = new EventEmitter();

  @Output() previousEvent = new EventEmitter();

  getInputError(name: string) {
    if (this.donationForm.getError("email", name)) {
      return name;
    }
    if (this.donationForm.getError("required", name)) {
      return name;
    }
    return null;
  }

  onPreviousClick() {
    this.previousEvent.emit();
  }

  onSubmit(e: Event) {
    e.preventDefault();
    this.donationForm.markAllAsTouched();
    if (this.donationForm.valid) {
      this.submitEvent.emit();
    }
  }
}
