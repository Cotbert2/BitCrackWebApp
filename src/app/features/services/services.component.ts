import { Component, signal, inject } from '@angular/core';
import { Product } from '../../core/models';
import { ServicesService } from '../../core/services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  private servicesService = inject(ServicesService);
  
  // Signal para los servicios
  services = this.servicesService.services;
  
  // Signal para filtro de precio
  priceFilter = signal<{ min: number; max: number }>({ min: 0, max: 5000 });
  
  // Computed signal para servicios filtrados
  filteredServices = signal<Product[]>([]);
  
  constructor() {
    // Inicializar servicios filtrados con todos los servicios
    this.filteredServices.set(this.services());
  }
  
  // Método para actualizar filtro de precio
  updatePriceFilter(min: number, max: number) {
    this.priceFilter.set({ min, max });
    this.updateFilteredServices();
  }
  
  // Método para actualizar servicios filtrados
  private updateFilteredServices() {
    const filter = this.priceFilter();
    this.filteredServices.set(
      this.servicesService.getServicesByPriceRange(filter.min, filter.max)
    );
  }
  
  // Método para resetear filtros
  resetFilters() {
    this.priceFilter.set({ min: 0, max: 5000 });
    this.filteredServices.set(this.services());
  }
  
  // TrackBy function para optimizar el renderizado
  trackByServiceId(index: number, service: Product): string {
    return service.id;
  }
  
  // Método para obtener el icono según el tipo de servicio
  getServiceIcon(serviceId: string): string {
    const iconMap: { [key: string]: string } = {
      '1': 'fas fa-code',           // Desarrollo Web
      '2': 'fas fa-mobile-alt',     // Aplicaciones Móviles
      '3': 'fas fa-laptop-code',    // Consultoría IT
      '4': 'fas fa-shopping-cart',  // E-commerce
      '5': 'fas fa-tools',          // Mantenimiento Web
      '6': 'fas fa-server'          // Hosting y Dominio
    };
    return iconMap[serviceId] || 'fas fa-cog';
  }
}
