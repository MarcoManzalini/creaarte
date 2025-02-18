import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes,  withInMemoryScrolling({
      scrollPositionRestoration: 'enabled', // Riporta sempre al top
      anchorScrolling: 'enabled',         // (Opzionale) Gestisce gli anchor
    })),
    provideAnimations(),
    provideAnimationsAsync(),
        providePrimeNG({ 
            theme: {
                preset: Aura,
                options: {
                  darkModeSelector: '.my-app-dark'
              }
            }
        })
  ],
};
