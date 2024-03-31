import { Routes } from '@angular/router';
import { provideState } from '@ngrx/store';

import { HomePageComponent } from './components/home-page/home-page.component';
import { ChatReducer } from './store/chat/chat.reducer'

export const routes: Routes = [
    {
        path: '', 
        component: HomePageComponent,
        providers: [
            provideState({ name: 'chat', reducer: ChatReducer })
        ]}
];
