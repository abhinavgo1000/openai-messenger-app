import { Messages } from './chat/messages.interface';

export interface LikeState {
    isActive: boolean;
}

export interface ChatState {
    messages: Messages[];
    error: any;
}

export interface AppState {
    like: LikeState;
    chat: ChatState;
}
