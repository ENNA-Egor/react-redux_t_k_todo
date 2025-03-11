
import { createSlice, nanoid } from '@reduxjs/toolkit';
import {ResetToDefault} from '../rootSelectors'



export const todosSlice = createSlice({  // часть кода для создания Slice
  name : '@@todos',
  initialState: [],
  reducers: {
    addTodo:  {
      reducer: (state, action)=> {
        const newTodo = action.payload;
      state.push(newTodo);
      },
      prepare:(title,  title1)=> ({
          payload:{
            title,
            title1,
            id: nanoid(),
            completed: false
          }
         })
    },
    removeTodo: (state, action)=> {
      const id = action.payload;
      return state.filter((todo)=> todo.id !== id)
    },
    toggleTodo: (state, action)=> {
      const id = action.payload;
      const todo = state.find (todo => todo.id === id);
      todo.completed = !todo.completed;
    },
    },
    extraReducers: (builder) => {
      builder
        .addCase(ResetToDefault, ()=> {
           return []
        })
    }
})

export const {addTodo, removeTodo, toggleTodo} = todosSlice.actions

