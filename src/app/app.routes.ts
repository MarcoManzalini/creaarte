import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ListaLavoriComponent } from './pages/lista-lavori/lista-lavori.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'lavori/:tipo',
        component: ListaLavoriComponent
    }
];
