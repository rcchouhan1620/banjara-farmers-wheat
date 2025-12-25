import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Enquiry } from '../models/enquiry.model';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {
  private enquiriesSubject = new BehaviorSubject<Enquiry[]>([]);
  enquiries$ = this.enquiriesSubject.asObservable();

  submitEnquiry(enquiry: Enquiry): boolean {
    if (enquiry.quantity < 3) {
      return false;
    }
    
    const currentEnquiries = this.enquiriesSubject.value;
    this.enquiriesSubject.next([...currentEnquiries, enquiry]);
    
    // Simulate API call
    console.log('Enquiry submitted:', enquiry);
    return true;
  }

  getEnquiries(): Enquiry[] {
    return this.enquiriesSubject.value;
  }
}
