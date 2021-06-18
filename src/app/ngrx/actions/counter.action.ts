import { createAction } from '@ngrx/store';

export const increment  = createAction('COUNTER_INCREMENT');
export const decrement  = createAction('COUNTER_DECREMENT');
export const reset      = createAction('COUNTER_RESET');