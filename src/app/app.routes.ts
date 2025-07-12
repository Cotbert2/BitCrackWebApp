import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'about',
        loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent)
    },
    {
        path: 'team',
        loadComponent: () => import('./features/team/team.component').then(m => m.TeamComponent)
    },
    {
        path: 'services',
        loadComponent: () => import('./features/services/services.component').then(m => m.ServicesComponent)
    },
    {
        path: 'contact',
        loadComponent: () => import('./features/contact/contact.component').then(m => m.ContactComponent)
    },
    {
        path: '**',
        loadComponent: () => import('./shared/notfound/notfound.component').then(m => m.NotfoundComponent)
    }
];
