import {ADD_TODOS, TOGGLE_TODO, REMOVE_TODO} from './todos-const'
import {createAction, nanoid} from '@reduxjs/toolkit'

  //   export const addTodo = (title, title1) => ({ 
  //   type: ADD_TODO,
  //   title,
  //   title1
  // })

   export const addTodo = createAction(ADD_TODOS, (title,  title1)=> ({
    payload:{
      title,
      title1,
      id: nanoid(),
      completed: false
    }
   }));

  //  console.log (addTodo.toString())

  //  export const toggleTodo = (id) => ({ 
  //   type: TOGGLE_TODO,
  //   id
  //  });
  export const toggleTodo = createAction(TOGGLE_TODO)

  //  export const removeTodo = (id) =>({ 
  //   type: REMOVE_TODO,
  //   id
  //  });
  export const removeTodo = createAction(REMOVE_TODO)