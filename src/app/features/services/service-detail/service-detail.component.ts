import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-service-detail',
  imports: [CurrencyPipe],
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss']
})
export class ServiceDetailComponent {
  @Input() service: any;

  getServiceIcon(serviceId: number): string {
    // This method should match the one from your services component
    const iconMap: { [key: number]: string } = {
      1: 'fas fa-code',
      2: 'fas fa-mobile-alt',
      3: 'fas fa-cloud',
      4: 'fas fa-database',
      5: 'fas fa-shield-alt',
      6: 'fas fa-cogs'
    };
    return iconMap[serviceId] || 'fas fa-code';
  }

}
