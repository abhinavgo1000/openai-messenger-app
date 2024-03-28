import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http'
import { provideStore, provideState } from '@ngrx/store';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideEffects } from '@ngrx/effects';

import { ChatEffects } from './store/chat/chat.effects';
import { ChatFeature } from './store/chat/chat.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(), 
    provideHttpClient(withFetch()), 
    provideStore(), 
    provideState(ChatFeature),
    provideAnimations(), 
    provideAnimationsAsync(), 
    provideEffects([ChatEffects])]
};
