import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ChatState } from './chat.reducer';

// Selector for the entire chat feature state
export const selectChatFeature = createFeatureSelector<ChatState>('chat');

// Selector for messages within the chat feature
export const selectAllMessages = createSelector(
    selectChatFeature,
    (state: ChatState) => state.messages
);