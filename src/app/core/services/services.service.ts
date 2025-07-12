import { Injectable, signal } from '@angular/core';
import { Product } from '../models';

@Injectable({
    providedIn: 'root'
})
export class ServicesService {
    private servicesData = signal<Product[]>([
        {
            id: '1',
            name: 'Web Development',
            description: 'Creation of modern and responsive websites using the latest technologies',
            price: 1500
        },
        {
            id: '2',
            name: 'Mobile Applications',
            description: 'Development of native and hybrid apps for iOS and Android',
            price: 2500
        },
        {
            id: '3',
            name: 'IT Consulting',
            description: 'Technology consulting to optimize business processes and systems',
            price: 800
        },
        {
            id: '4',
            name: 'E-commerce',
            description: 'Complete e-commerce platforms with payment and inventory management',
            price: 3000
        },
        {
            id: '5',
            name: 'Website Maintenance',
            description: 'Ongoing website maintenance and update service',
            price: 500
        },
        {
            id: '6',
            name: 'Hosting and Domain',
            description: 'Web hosting and domain registration services with 24/7 support',
            price: 200
        }
    ]
    );

    // Getter para acceder a los servicios
    get services() {
        return this.servicesData.asReadonly();
    }

    // Método para obtener un servicio por ID
    getServiceById(id: string): Product | undefined {
        return this.servicesData().find(service => service.id === id);
    }

    // Método para filtrar servicios por precio
    getServicesByPriceRange(minPrice: number, maxPrice: number): Product[] {
        return this.servicesData().filter(service =>
            service.price >= minPrice && service.price <= maxPrice
        );
    }
}
