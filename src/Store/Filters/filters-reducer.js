import {SET_FILTER} from './filters-const';
import {createReducer, createSlice} from '@reduxjs/toolkit';

// export const filters = (state ='all', action) =>{
//     switch (action.type) {
//         case SET_FILTER : {
//             return action.filter;
//         }
//         default :{
//             return state
//         }
//     }
// }

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