import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "input[numbersOnly]",
  standalone: true,
})
export class NumberOnlyDirective {
  constructor(private _el: ElementRef<HTMLInputElement>) {}

  @HostListener("ngModelChange") onInputChange() {
    const initalValue = this._el.nativeElement.value;
    this._el.nativeElement.value = initalValue.replace(/[^0-9]*/g, "");
  }
}
