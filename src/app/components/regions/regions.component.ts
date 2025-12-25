import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RegionService } from '../../services/region.service';
import { Region } from '../../models/region.model';

@Component({
  selector: 'app-regions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {
  regions: Region[] = [];
  selectedRegion: Region | null = null;

  constructor(
    private regionService: RegionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.regions = this.regionService.getRegions();
  }

  openRegionDetail(region: Region): void {
    this.selectedRegion = region;
  }

  closeRegionDetail(): void {
    this.selectedRegion = null;
  }

  orderFromRegion(region: Region, event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    this.regionService.setSelectedRegion(region);
    this.closeRegionDetail();
    this.router.navigate(['/enquiry']);
  }

  getAvailabilityClass(availability: string): string {
    switch(availability) {
      case 'High':
        return 'bg-green-100 text-green-700';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-700';
      case 'Low':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  }
}