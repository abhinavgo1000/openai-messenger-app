import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideEffects } from '@ngrx/effects';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideStore(), provideAnimationsAsync(), provideEffects()]
};
