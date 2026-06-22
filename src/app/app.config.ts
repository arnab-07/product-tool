import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { API_URL } from  '../api.token';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export function apiFactory():string {
    
    const isProd = false

    return isProd ? 'http://localhost:3000': 'https://ticket-prod/api';
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection(),
    provideRouter(routes),
    {
      provide: API_URL,
      useFactory: apiFactory,
      multi: true
    }
  ]
};
