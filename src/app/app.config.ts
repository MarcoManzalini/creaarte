import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes,  withInMemoryScrolling({
      scrollPositionRestoration: 'enabled', // Riporta sempre al top
      anchorScrolling: 'enabled',         // (Opzionale) Gestisce gli anchor
    })),
    provideAnimations(),
  ],
};