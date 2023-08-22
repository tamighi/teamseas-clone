import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeroComponent } from "./views/hero/hero.component";
import { ContributeComponent } from "./views/contribute/contribute.component";
import { TopContributorsComponent } from "./views/top-contributors/top-contributors.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    ContributeComponent,
    TopContributorsComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "cli";
}
