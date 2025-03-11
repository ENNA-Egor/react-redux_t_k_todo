
import { createSlice} from '@reduxjs/toolkit';
import {ResetToDefault} from '../rootSelectors'



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
  },
          extraReducers: (builder) => {
            builder
              .addCase(ResetToDefault, ()=> {
                 return 0
              })
          }
})


export const {increment, decrement, reset} = counterSlice.actions;

