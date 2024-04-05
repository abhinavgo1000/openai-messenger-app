import { createAction, props } from '@ngrx/store';

export const loadMessages = createAction('[Chat] Load Messages');
export const loadMessagesSuccess = createAction('[Chat] Load Messages Success', props<{ messages: string[] }>());
export const loadMessagesFailure = createAction('[Chat] Load Messages Failure', props<{ error: any }>());

export const sendMessage = createAction('[Chat] Send Message', props<{ message: string }>());
