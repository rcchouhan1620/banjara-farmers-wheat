// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { LucideAngularModule, Phone, Mail, MapPin } from 'lucide-angular';

// @Component({
//   selector: 'app-about',
//   standalone: true,
//   imports: [CommonModule, LucideAngularModule],
//   templateUrl: '/about.component.html',
//   styleUrls: ['/about.component.css']
// })
// export class AboutComponent {
//   readonly Phone = Phone;
//   readonly Mail = Mail;
//   readonly MapPin = MapPin;
// }
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Phone, Mail, MapPin } from 'lucide-angular';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  readonly Phone = Phone;
  readonly Mail = Mail;
  readonly MapPin = MapPin;
}
