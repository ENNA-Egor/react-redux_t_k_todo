
import { createSlice} from '@reduxjs/toolkit';



export const filtersSlice = createSlice({
    name: '@@filters',
    initialState: 'all',
    reducers:{
        setFilter: (_, action)=>{
            return action.payload;
        }
    }
}) 

export const {setFilter} = filtersSlice.actions;