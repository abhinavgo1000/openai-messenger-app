import { Action, createReducer, on } from '@ngrx/store';
import * as LikeActions from './like.actions';

export const initialState = false;

const _likeReducer = createReducer(
    initialState,
    on(LikeActions.like, (state) => true),
    on(LikeActions.unlike, (state) => false)
);

export function LikeReducer(state: boolean | undefined, action: Action) {
    return _likeReducer(state, action);
}
