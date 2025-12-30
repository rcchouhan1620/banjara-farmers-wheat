import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

import {
  Wheat,
  Eye,
  Droplets,
  Weight,
  Sprout,
  Beaker,
  Bug,
  Gauge
} from 'lucide-angular';

@Component({
  selector: 'app-wheat-quality-card',
  standalone: true,
  imports: [CommonModule,LucideAngularModule],
  templateUrl: './wheat-quality-card.component.html'
})
export class WheatQualityCardComponent {

  activeTab = 'physical';

  icons = {
    Wheat,
    Eye,
    Droplets,
    Weight,
    Sprout,
    Beaker,
    Bug,
    Gauge
  };

  tabs = [
    { id: 'physical', label: 'Physical', icon: this.icons.Eye },
    { id: 'moisture', label: 'Moisture', icon: this.icons.Droplets },
    { id: 'testweight', label: 'Test Weight', icon: this.icons.Weight },
    { id: 'purity', label: 'Purity', icon: this.icons.Gauge },
    { id: 'germination', label: 'Germination', icon: this.icons.Sprout },
    { id: 'chemical', label: 'Chemical', icon: this.icons.Beaker },
    { id: 'quality', label: 'Quality', icon: this.icons.Bug }
  ];

  parameters: any = {
    physical: {
      title: 'Physical (Visual) Parameters',
      items: [
        { label: 'Seed Size & Boldness', value: 'Bold, well-filled grains preferred' },
        { label: 'Grain Color', value: 'Bright golden color' },
        { label: 'Uniformity', value: 'Same size and shape grains' },
        { label: 'Cleanliness', value: 'Free from dust, stones, straw, weed seeds' },
        { label: 'Broken Grains', value: 'Very low percentage' },
        { label: 'Shriveled Grains', value: 'Not acceptable' }
      ]
    },
    moisture: {
      title: 'Moisture Content',
      items: [
        { label: 'Ideal Moisture', value: '10–12%', highlight: true },
        { label: 'High Moisture Effects', value: 'Reduces storage life' },
        { label: '', value: 'Causes fungal growth' },
        { label: '', value: 'Lowers market price' }
      ]
    },
    testweight: {
      title: 'Test Weight (Hectoliter Weight)',
      items: [
        { label: 'Purpose', value: 'Indicates grain density and flour yield' },
        { label: 'Standard', value: '≥ 78 kg/hl', highlight: true },
        { label: 'Market Rule', value: 'Higher test weight = better price' }
      ]
    },
    purity: {
      title: 'Purity Parameters (Seed Selling)',
      items: [
        { label: 'Genetic Purity', value: '≥ 98%', highlight: true },
        { label: 'Physical Purity', value: '≥ 98%', highlight: true },
        { label: 'Inert Matter', value: '≤ 2%' },
        { label: 'Other Crop Seeds', value: 'Very low or nil' },
        { label: 'Weed Seeds', value: 'Nil' }
      ]
    },
    germination: {
      title: 'Germination (Seed Market Only)',
      items: [
        { label: 'Minimum Germination', value: '≥ 85%', highlight: true },
        { label: 'Embryo Condition', value: 'Healthy embryo' }
      ]
    },
    chemical: {
      title: 'Chemical / Milling Quality',
      items: [
        { label: 'Chapati Wheat Protein', value: '10–12%' },
        { label: 'Bread Wheat Protein', value: '12–14%' },
        { label: 'Gluten Strength', value: 'Good elasticity' },
        { label: 'Ash Content', value: 'Low preferred' }
      ]
    },
    quality: {
      title: 'Additional Quality Checks',
      items: [
        { label: 'Disease Free', value: 'No smut, bunt, rust' },
        { label: 'Pest Free', value: 'No insect damage' },
        { label: 'Odour', value: 'No musty smell' },
        { label: 'Taste', value: 'No bitterness' },
        { label: 'Preferred Varieties', value: 'HD-2967, HD-3086, PBW' }
      ]
    }
  };

  setTab(tabId: string) {
    this.activeTab = tabId;
  }
}

