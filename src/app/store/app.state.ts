import { Messages } from './chat/messages.interface';

export interface LikeState {
    isActive: boolean;
    changeCount: number;
}

export interface ChatState {
    messages: Messages[];
    error: any;
}

export interface AppState {
    like: LikeState;
    chat: ChatState;
}
