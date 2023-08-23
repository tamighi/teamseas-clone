import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeroComponent } from "./components/hero/hero.component";
import { ContributeComponent } from "./components/contribute/contribute.component";
import { TopContributorsComponent } from "./components/top-contributors/top-contributors.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    ContributeComponent,
    TopContributorsComponent,
    FooterComponent
  ],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "cli";
}
