import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommaFormatPipe } from 'src/app/pipes/CommaFormat.pipe';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, CommaFormatPipe],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

}
