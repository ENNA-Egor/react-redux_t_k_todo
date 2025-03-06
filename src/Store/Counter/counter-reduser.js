// import {increment, decrement, reset} from './counter-actions';
import {createReducer, createSlice} from '@reduxjs/toolkit';


// export const counterReducer = createReducer (0, (builder)=>{ //Редюсер с помощью createReducer
//   builder
//       .addCase(increment, (state) =>{
//         return state  +1
//       })
//       .addCase(decrement, (state) =>{
//         return state  -1
//       })
//       .addCase(reset, (state) =>{
//         return state = 0
//       })
// });

export const counterSlice = createSlice({
  name: '@@counter',
  initialState : 0,
  reducers:{
    increment:(state)=> {
      return state  +1
    },
    decrement:(state)=> {
      return state  -1
    },
    reset:(state)=> {
      return state = 0
    },
  }
})


export const {increment, decrement, reset} = counterSlice.actions;

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