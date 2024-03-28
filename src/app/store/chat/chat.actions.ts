import { createAction, props } from '@ngrx/store';
import { Messages } from './messages.interface';

export const loadMessages = createAction('[Chat] Load Messages');
export const loadMessagesSuccess = createAction('[Chat] Load Messages Success', props<{ messages: Messages[] }>());
export const loadMessagesFailure = createAction('[Chat] Load Messages Failure', props<{ error: any }>());

export const sendMessage = createAction('[Chat] Send Message', props<{ message: string }>());
export const sendMessageSuccess = createAction('[Chat] Send Message Success', props<{ response: any }>());
export const sendMessageFailure = createAction('[Chat] Send Message Failure', props<{ error: any }>());
