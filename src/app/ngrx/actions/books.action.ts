import { createAction, props } from '@ngrx/store';

export const addBook  = createAction(
    'ADD_BOOK', 
    props<{bookTitle:string}>()
);