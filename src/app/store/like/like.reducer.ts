import { Action, createReducer, on } from '@ngrx/store';
import * as LikeActions from './like.actions';

export interface LikeState {
    isActive: boolean;
}

export const initialState: LikeState = {
    isActive: false
};

export const LikeReducer = createReducer(
    initialState,
    on(LikeActions.like, (state) => ({ ...state, isActive: true })),
    on(LikeActions.unlike, (state) => ({ ...state, isActive: false }))
);

