import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, HttpClient, HttpClientModule, withFetch } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { provideStore, provideState, StoreModule } from '@ngrx/store';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideEffects } from '@ngrx/effects';

import { routes } from './app.routes';
import { HttpLoaderFactory } from './app.component';
import { ChatEffects } from './store/chat/chat.effects';
import { ChatReducer } from './store/chat/chat.reducer';
import { LikeReducer } from './store/like/like.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(), 
    provideHttpClient(withFetch()), 
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
      }),
      StoreModule.forRoot({
        chat: ChatReducer
      }),
    ),
    provideStore(), 
    provideState(
      { name: 'like', reducer: LikeReducer }
    ),
    provideAnimations(), 
    provideAnimationsAsync(), 
    provideEffects([ChatEffects])]
};
