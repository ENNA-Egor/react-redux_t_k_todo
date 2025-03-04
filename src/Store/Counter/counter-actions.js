 import {INCREMENT, DECREMENT, RESET} from './counter-const';
 import {createAction} from '@reduxjs/toolkit';
 
 export const increment = createAction(INCREMENT);
 export const decrement = createAction(DECREMENT);
 export const reset = createAction(RESET);