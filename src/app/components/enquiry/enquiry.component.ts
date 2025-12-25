import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, CheckCircle } from 'lucide-angular';
import { EnquiryService } from '../../services/enquiry.service';
import { RegionService } from '../../services/region.service';
import { Enquiry } from '../../models/enquiry.model';
import { Region } from '../../models/region.model';

@Component({
  selector: 'app-enquiry',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit {
  readonly CheckCircle = CheckCircle;
  
  formData: Enquiry = {
    name: '',
    email: '',
    phone: '',
    region: '',
    quantity: 3,
    address: '',
    message: ''
  };

  regions: Region[] = [];
  formSubmitted: boolean = false;
  errorMessage: string = '';

  constructor(
    private enquiryService: EnquiryService,
    private regionService: RegionService
  ) {}

  ngOnInit(): void {
    this.regions = this.regionService.getRegions();
    
    // Pre-fill region if one was selected
    this.regionService.selectedRegion$.subscribe(region => {
      if (region) {
        this.formData.region = region.name;
      }
    });
  }

  onSubmit(): void {
    this.errorMessage = '';
    
    if (this.formData.quantity < 3) {
      this.errorMessage = 'Minimum order quantity is 3 quintals';
      return;
    }

    const success = this.enquiryService.submitEnquiry({...this.formData});
    
    if (success) {
      this.formSubmitted = true;
      setTimeout(() => {
        this.formSubmitted = false;
        this.resetForm();
      }, 5000);
    } else {
      this.errorMessage = 'Failed to submit enquiry. Please try again.';
    }
  }

  resetForm(): void {
    this.formData = {
      name: '',
      email: '',
      phone: '',
      region: '',
      quantity: 3,
      address: '',
      message: ''
    };
    this.errorMessage = '';
  }
}
