import { Routes } from '@angular/router';
import { provideState } from '@ngrx/store';

import { ChatReducer } from './store/chat/chat.reducer'

export const routes: Routes = [
    {
        path: '', 
        loadComponent: () =>
            import('./components/home-page/home-page.component')
                .then(m => m.HomePageComponent),
        providers: [
            provideState({ name: 'chat', reducer: ChatReducer })
        ]
    }
];
