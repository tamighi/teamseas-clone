import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "commaFormat",
  standalone: true,
})
export class CommaFormatPipe implements PipeTransform {
  transform(value: number): string {
    if (isNaN(value)) {
      return value.toString();
    }

    const parts = value.toString().split(".");

    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return parts.join(".");
  }
}
