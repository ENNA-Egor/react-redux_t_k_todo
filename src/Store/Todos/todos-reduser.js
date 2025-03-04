// import {ADD_TODOS, TOGGLE_TODO, REMOVE_TODO} from './todos-const'
import {addTodo, removeTodo, toggleTodo} from './todos-actions';
import {createReducer} from '@reduxjs/toolkit';

export const todosReducer = createReducer ([], (builder)=> {
  builder
    .addCase(addTodo, (state, action) => {
      const newTodo = action.payload;
      state.push(newTodo);
    })
    .addCase(removeTodo, (state, action) => {
      const id = action.payload;
      return state.filter((todo)=> todo.id !== id);
    })
    .addCase(toggleTodo, (state, action) => {
      const id = action.payload;
      const todo = state.find (todo => todo.id === id);
      todo.completed = !todo.completed;
    })
})

// export const todosReducer = (state = [], action)=> {
//     switch (action.type){
//       case addTodo.toString():{
//         return [
//           ...state, 
//           {
//             ...action.payload
//           }
//         ];
//       }
//       case removeTodo.toString():{
//         return state.filter((todo)=> todo.id !== action.payload);
//       }
//       case  toggleTodo.toString():{
//         return state.map((todo)=>
//           todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
//         );
//       }
//       default: {
//         return state;
//       }
//     }
//   }