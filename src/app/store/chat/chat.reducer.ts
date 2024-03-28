
import { createFeature, createReducer, on } from '@ngrx/store';
import * as ChatActions from './chat.actions';

export interface State {
    messages: any[];
    error: any;
}

export const initialState: State = {
    messages: [],
    error: null
};

export const ChatFeature = createFeature({
    name: 'chat',
    reducer: createReducer(
        initialState,
        on(ChatActions.loadMessagesSuccess, (state, { messages }) => ({ ...state, messages })),
        on(ChatActions.loadMessagesFailure, (state, { error }) => ({ ...state, error })),
        on(ChatActions.sendMessageSuccess, (state, { response }) => ({ ...state, messages: [...state.messages, response] })),
        on(ChatActions.sendMessageFailure, (state, { error }) => ({ ...state, error }))
    ),
});
