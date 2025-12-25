import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Region } from '../models/region.model';

@Injectable({
  providedIn: 'root'
})
export class RegionService {
  private regions: Region[] = [
    {
      id: 1,
      name: 'Punjab',
      varieties: ['PBW 343', 'HD 2967', 'DBW 187'],
      pricePerQuintal: '₹2,200',
      availability: 'High',
      harvestSeason: 'March - April',
      image: '🌾'
    },
    {
      id: 2,
      name: 'Haryana',
      varieties: ['WH 1105', 'HD 3086', 'DBW 222'],
      pricePerQuintal: '₹2,150',
      availability: 'High',
      harvestSeason: 'April - May',
      image: '🌾'
    },
    {
      id: 3,
      name: 'Uttar Pradesh',
      varieties: ['HD 2967', 'PBW 550', 'DBW 173'],
      pricePerQuintal: '₹2,100',
      availability: 'Medium',
      harvestSeason: 'March - April',
      image: '🌾'
    },
    {
      id: 4,
      name: 'Madhya Pradesh',
      varieties: ['MP 3288', 'HI 1563', 'DBW 107'],
      pricePerQuintal: '₹2,050',
      availability: 'Medium',
      harvestSeason: 'February - March',
      image: '🌾'
    },
    {
      id: 5,
      name: 'Rajasthan',
      varieties: ['Raj 4238', 'HD 2967', 'DBW 88'],
      pricePerQuintal: '₹2,180',
      availability: 'High',
      harvestSeason: 'March - April',
      image: '🌾'
    },
    {
      id: 6,
      name: 'Bihar',
      varieties: ['HD 2733', 'DBW 39', 'K 0307'],
      pricePerQuintal: '₹2,080',
      availability: 'Low',
      harvestSeason: 'March - April',
      image: '🌾'
    }
  ];

  private selectedRegionSubject = new BehaviorSubject<Region | null>(null);
  selectedRegion$ = this.selectedRegionSubject.asObservable();

  getRegions(): Region[] {
    return this.regions;
  }

  getRegionById(id: number): Region | undefined {
    return this.regions.find(region => region.id === id);
  }

  setSelectedRegion(region: Region | null): void {
    this.selectedRegionSubject.next(region);
  }
}
