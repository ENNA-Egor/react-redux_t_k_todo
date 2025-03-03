import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from './todos-const'


    export const addTodo = (title, title1) => ({ 
    type: ADD_TODO,
    title,
    title1
  })
   export const toggleTodo = (id) => ({ 
    type: TOGGLE_TODO,
    id
   });
   export const removeTodo = (id) =>({ 
    type: REMOVE_TODO,
    id
   });