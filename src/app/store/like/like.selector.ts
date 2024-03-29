import { createSelector } from '@ngrx/store';

import { LikeState } from './like.reducer';

export interface AppState {
    like: LikeState;
}

export const selectLikeState = (state: AppState) => state.like;

export const selectIsLiked = createSelector(
    selectLikeState,
    (state: LikeState) => state.isActive
);