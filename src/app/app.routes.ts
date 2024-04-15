import { Routes } from '@angular/router';
import { provideState } from '@ngrx/store';

import { ChatReducer } from './store/chat/chat.reducer'
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

export const routes: Routes = [
    {
        path: 'home', 
        loadComponent: () =>
            import('./components/home-page/home-page.component')
                .then(m => m.HomePageComponent),
        providers: []
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'login', 
        loadComponent: () =>
            import('./components/login-page/login-page.component')
                .then(m => m.LoginPageComponent),
        providers: []
    },
    {
        path: 'about-me', 
        loadComponent: () =>
            import('./components/about-me-page/about-me-page.component')
                .then(m => m.AboutMePageComponent),
        providers: []
    },
    {
        path: 'messenger', 
        loadComponent: () =>
            import('./components/messenger-page/messenger-page.component')
                .then(m => m.MessengerPageComponent),
        providers: [
            provideState({ name: 'chat', reducer: ChatReducer })
        ]
    },
    {
        path: '**',
        component: NotFoundPageComponent
    }
];
