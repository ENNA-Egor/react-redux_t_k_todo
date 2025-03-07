import {SET_FILTER} from './filters-const';
// import {createReducer, createSlice, nanoid} from '@reduxjs/toolkit';

export const filters = (state ='all', action) =>{
    switch (action.type) {
        case SET_FILTER : {
            return action.filter;
        }
        default :{
            return state
        }
    }
}

// export const filtersSlice = createSlice({
//     name: '@@filters',
//     initialState: 'all',
//     reducers:{
//         SET_FILTER: (state, action)=>{
//             return action.filter;
//         }
//     }
// }) 

// export const {SET_FILTER} = filtersSlice.actions;