import { Action, createReducer, on } from '@ngrx/store';

import * as LikeActions from './like.actions';

export interface LikeState {
    isActive: boolean;
    changeCount: number;
}

export const initialState: LikeState = {
    isActive: false,
    changeCount: 0
};

export const LikeReducer = createReducer(
    initialState,
    on(LikeActions.like, (state) => ({ ...state, isActive: true, changeCount: state.changeCount + 1 })),
    on(LikeActions.unlike, (state) => ({ ...state, isActive: false, changeCount: state.changeCount + 1 }))
);

