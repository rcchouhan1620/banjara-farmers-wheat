import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LucideAngularModule, Users, Award, Truck, CheckCircle } from 'lucide-angular';
import { RegionService } from '../../services/region.service';
import { Region } from '../../models/region.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  readonly Users = Users;
  readonly Award = Award;
  readonly Truck = Truck;
  readonly CheckCircle = CheckCircle;
  
  regions: Region[] = [];
  featuredRegions: Region[] = [];

  constructor(
    private regionService: RegionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.regions = this.regionService.getRegions();
    this.featuredRegions = this.regions.slice(0, 3);
  }

  navigateToEnquiry(): void {
    this.router.navigate(['/enquiry']);
  }

  navigateToRegions(): void {
    this.router.navigate(['/regions']);
  }

  selectRegion(region: Region): void {
    this.regionService.setSelectedRegion(region);
    this.router.navigate(['/enquiry']);
  }
}
