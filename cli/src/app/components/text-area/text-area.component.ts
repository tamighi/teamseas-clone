import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-text-area",
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  templateUrl: "./text-area.component.html",
  styleUrls: ["./text-area.component.css"],
})
export class TextAreaComponent {
  @Input() name!: string;
  @Input() label!: string;
  @Input() formGroup!: FormGroup;
  @Input() required: boolean = false;

  @Input() rows: number = 6;
}
