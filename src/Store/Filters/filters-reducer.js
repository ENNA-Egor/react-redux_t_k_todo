
import { createSlice} from '@reduxjs/toolkit';
import {ResetToDefault} from '../rootSelectors'


export const filtersSlice = createSlice({
    name: '@@filters',
    initialState: 'all',
    reducers:{
        setFilter: (_, action)=>{
            return action.payload;
        }
    },
        extraReducers: (builder) => {
          builder
            .addCase(ResetToDefault, ()=> {
               return 'all'
            })
        }
}) 

export const {setFilter} = filtersSlice.actions;