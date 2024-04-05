
import { createReducer, on } from '@ngrx/store';

import * as ChatActions from './chat.actions';

export interface ChatState {
    messages: string[];
    error: any;
}

export const initialState: ChatState = {
    messages: [],
    error: null
};

export const ChatReducer = createReducer(
    initialState,
    on(ChatActions.loadMessagesSuccess, (state, { messages }) => ({ ...state, messages })),
    on(ChatActions.loadMessagesFailure, (state, { error }) => ({ ...state, error }))
);
