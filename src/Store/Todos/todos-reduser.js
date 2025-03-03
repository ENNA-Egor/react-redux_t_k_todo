import {ADD_TODOS, TOGGLE_TODO, REMOVE_TODO} from './todos-const'
import {addTodo} from './todos-actions';

export const todosReducer = (state = [], action)=> {
    switch (action.type){
      case addTodo.toString():{
        return [
          ...state, 
          {
            ...action.payload
          }
        ];
      }
      case REMOVE_TODO:{
        return state.filter((todo)=> todo.id !== action.id);
      }
      case  TOGGLE_TODO:{
        return state.map((todo)=>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        );
      }
      default: {
        return state;
      }
    }
  }