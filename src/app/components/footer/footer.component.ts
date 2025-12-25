import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Wheat } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  readonly Wheat = Wheat;
  currentYear = new Date().getFullYear();
}