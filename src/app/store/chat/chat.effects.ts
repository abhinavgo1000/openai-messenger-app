import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, tap, map, mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as ChatActions from './chat.actions';

import { OpenaiChatService } from '../../shared/services/openai-chat.service';

@Injectable()
export class ChatEffects {
    loadMessages$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ChatActions.loadMessages),
            switchMap(() => this.chatService.getMessages().pipe(
                mergeMap((messages) => of(ChatActions.loadMessagesSuccess({ messages }))),
                catchError(error => of(ChatActions.loadMessagesFailure({ error })))
            ))
        )
    );

    sendMessage$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ChatActions.sendMessage),
            tap((action) => this.chatService.sendMessage(action.message))
        ), { dispatch: false }
    );

    constructor(
        private actions$: Actions, 
        private chatService: OpenaiChatService) {}
}