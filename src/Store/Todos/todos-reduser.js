// import {ADD_TODOS, TOGGLE_TODO, REMOVE_TODO} from './todos-const'
import {addTodo, removeTodo, toggleTodo} from './todos-actions';

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
      case removeTodo.toString():{
        return state.filter((todo)=> todo.id !== action.payload);
      }
      case  toggleTodo.toString():{
        return state.map((todo)=>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        );
      }
      default: {
        return state;
      }
    }
  }