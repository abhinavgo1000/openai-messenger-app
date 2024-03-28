
import { createReducer, on } from '@ngrx/store';
import * as ChatActions from './chat.actions';
import { Messages } from './messages.interface';

export interface State {
    messages: Messages[];
    error: any;
}

export const initialState: State = {
    messages: [],
    error: null
};

export const ChatReducer = createReducer(
    initialState,
    on(ChatActions.loadMessagesSuccess, (state, { messages }) => ({ ...state, messages })),
    on(ChatActions.loadMessagesFailure, (state, { error }) => ({ ...state, error })),
    on(ChatActions.sendMessageSuccess, (state, { response }) => ({ ...state, messages: [...state.messages, response] })),
    on(ChatActions.sendMessageFailure, (state, { error }) => ({ ...state, error }))
);
