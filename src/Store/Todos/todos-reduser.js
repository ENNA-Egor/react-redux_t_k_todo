// import {ADD_TODOS, TOGGLE_TODO, REMOVE_TODO} from './todos-const'
import {addTodo, removeTodo, toggleTodo} from './todos-actions';
import {createReducer, createSlice} from '@reduxjs/toolkit';

///////\/\/\/\/\/\/\/\/\/\
//Данная конструкция в reduxjs/toolkit версии 2.6.0 удалена и не работает 

// export const todosReducer = createReducer ([], {
//   [addTodo]:(state, action) => {
//     const newTodo = action.payload;
//     state.push(newTodo);
//   },
//   [removeTodo]: (state, action) => {
//     const id = action.payload;
//     return state.filter((todo)=> todo.id !== id);
//   },
//   [toggleTodo]:(state, action) => {
//     const id = action.payload;
//     const todo = state.find (todo => todo.id === id);
//     todo.completed = !todo.completed;
//   },

// });

/////./././././.\/\/\/\/\/\/\/./././././.


export const todosReducer = createReducer ([], (builder)=> {  //Редюсер с помощью createReducer
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
});

// export const todosSlice = createSlice({  // часть кода для создания Slice
//   name : '@@todos',
//   initialState: [],
//   reducers: {
//     addTodo:  {
//       reducer: (state, action)=> {
//         const newTodo = action.payload;
//       state.push(newTodo);
//       },
//       prepare:(title,  title1)=> ({
//           payload:{
//             title,
//             title1,
//             id: nanoid(),
//             completed: false
//           }
//          })
//     },
//     removeTodo: (state, action)=> {
//       const id = action.payload;
//       return state.filter((todo)=> todo.id !== id)
//     },
//     toggleTodo: (state, action)=> {
//       const id = action.payload;
//       const todo = state.find (todo => todo.id === id);
//       todo.completed = !todo.completed;
//     },
//     }
// })

// export const todosReducer = (state = [], action)=> {  //Редюсер без reduxjs/toolkit
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