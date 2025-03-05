import {increment, decrement, reset} from './counter-actions';
import {createReducer} from '@reduxjs/toolkit';


export const counterReducer = createReducer (0, (builder)=>{ //Редюсер с помощью createReducer
  builder
      .addCase(increment, (state) =>{
        return state  +1
      })
      .addCase(decrement, (state) =>{
        return state  -1
      })
      .addCase(reset, (state) =>{
        return state = 0
      })
});
// export const counterReducer = (state = 0, action) => {  //Редюсер без reduxjs/toolkit
//     switch (action.type) {
//       case increment.toString(): {
//         return state + 1;
//       }
//       case decrement.toString(): {
//         return state - 1;
//       }
//       case reset.toString(): {
//         return 0;
//       }
//       default: {
//         return state;
//       }
//     }
//   };