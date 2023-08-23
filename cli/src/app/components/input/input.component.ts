import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-input",
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.css"],
})
export class InputComponent {
  @Input() name!: string;
  @Input() label!: string;
  @Input() formGroup!: FormGroup;
  @Input() required: boolean = false;
  @Input() error: string | null = null;
}
