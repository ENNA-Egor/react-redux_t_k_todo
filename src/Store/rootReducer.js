import { createStore, combineReducers } from "redux";
import {todosReducer, todosSlice} from './Todos/todos-reduser';
import {counterReducer} from './Counter/counter-reduser';
import {filters} from './Filters/filters-reducer';
import {loadState, saveState} from './Todos/local-storage';
import throttle from 'lodash/throttle';



// const rootReducer = combineReducers({
//   counter: counterReducer,
//   todos: todosReducer,
//   filters,
  
// });
const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
  filters,
  
});


export const cofigureStore = () => {
  const persistedState = loadState();
  const store = createStore(
    rootReducer, 
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  store.subscribe(throttle(()=>{
    saveState({
      todos:store.getState().todos,
      counter: store.getState().counter,
    });
  }, 3000));

   return store ;
};



 



