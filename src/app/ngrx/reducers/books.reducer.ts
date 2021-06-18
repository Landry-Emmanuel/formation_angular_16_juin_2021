import { createReducer, on } from '@ngrx/store';
import { addBook  } from '../actions/books.action';
 
export const initialState:string[] = [];
 
const _bookReducer = createReducer(
  initialState,
  on(
      addBook, 
      (state, action) => {
          
        return [...state, action.bookTitle];

        // state.push(action.bookTitle);
        // return state;
      } 
    )
);
 
export function bookReducer(state:any, action:any) {
  return _bookReducer(state, action);
}