import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as ChatActions from './chat.actions';
import { OpenaiChatService } from '../../shared/services/openai-chat.service';

@Injectable()
export class ChatEffects {
    loadMessages$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ChatActions.loadMessages),
            mergeMap(() => this.chatService.getMessages().pipe(
                map(messages => ChatActions.loadMessagesSuccess({ messages })),
                catchError(error => of(ChatActions.loadMessagesFailure({ error })))
            ))
        )
    );

    sendMessage$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ChatActions.sendMessage),
            mergeMap((action) => this.chatService.sendMessage(action.message).pipe(
                map(response => ChatActions.sendMessageSuccess({ response })),
                catchError(error => of(ChatActions.sendMessageFailure({ error })))
            ))
        )
    );

    constructor(
        private actions$: Actions, 
        private chatService: OpenaiChatService) {}
}