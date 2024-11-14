import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ListaLavoriComponent } from './pages/lista-lavori/lista-lavori.component';
import { ListaTecnicheComponent } from './pages/lista-tecniche/lista-tecniche.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'cornici',
        component: ListaLavoriComponent
    },
    {
        path: 'tecniche',
        component: ListaTecnicheComponent
    }
];
