export interface LikeState {
    isActive: boolean;
    changeCount: number;
}

export interface ChatState {
    messages: string[];
    error: any;
}

export interface AppState {
    like: LikeState;
    chat: ChatState;
}
