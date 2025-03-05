import {increment, decrement, reset} from './counter-actions';
import {createReducer} from '@reduxjs/toolkit';


export const counterReducer = createReducer (0, (builder)=>{
  builder
      .addCase(increment, (state) =>{
        // const count = action.payload;
        return state  +1
      })
      .addCase(decrement, (state) =>{
        // const count = action.payload;
        return state  -1
      })
      .addCase(reset, (state) =>{
        return state = 0
      })
});
// export const counterReducer = (state = 0, action) => {
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