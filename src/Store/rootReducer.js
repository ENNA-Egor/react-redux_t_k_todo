import { createStore, combineReducers } from "redux";
import {todosSlice} from './Todos/todos-reduser';
import { counterSlice} from './Counter/counter-reduser';
import {filtersSlice} from './Filters/filters-reducer';
import {loadState, saveState} from './Todos/local-storage';
import throttle from 'lodash/throttle';



const rootReducer = combineReducers({
  counter: counterSlice.reducer,
  todos: todosSlice.reducer,
  filters: filtersSlice.reducer,
  
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



 



