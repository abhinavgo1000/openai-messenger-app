import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http'
import { provideStore } from '@ngrx/store';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideEffects } from '@ngrx/effects';

import { ChatEffects } from './store/chat/chat.effects';
import { ChatReducer } from './store/chat/chat.reducer';
import { LikeReducer } from './store/like/like.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(), 
    provideHttpClient(withFetch()), 
    provideStore({
      chat: ChatReducer,
      like: LikeReducer
    }), 
    provideAnimations(), 
    provideAnimationsAsync(), 
    provideEffects([ChatEffects])]
};
