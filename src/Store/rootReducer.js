import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import { createStore, combineReducers } from "redux";
import {todosSlice} from './Todos/todos-reduser';
import { counterSlice} from './Counter/counter-reduser';
import {filtersSlice} from './Filters/filters-reducer';
import {loadState, saveState} from './Todos/local-storage';
import throttle from 'lodash/throttle';
import logger from 'redux-logger';



// const rootReducer = combineReducers({
//   counter: counterSlice.reducer,
//   todos: todosSlice.reducer,
//   filters: filtersSlice.reducer,
  
// });



const persistedState = loadState();

export const store = configureStore ({
  reducer:{
    counter: counterSlice.reducer,
    todos: todosSlice.reducer,
    filters: filtersSlice.reducer, 
      // persistedState,
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger),
    devTools: true,
    preloadedState : persistedState,

  //  return store ;
});
store.subscribe(throttle(()=>{
}, 3000));
saveState({
  todos:store.getState().todos,
  counter: store.getState().counter,
});

// export const cofigureStore = () => {
//   const persistedState = loadState();
//   const store = createStore(
//     rootReducer, 
//     persistedState,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//   );
//   store.subscribe(throttle(()=>{
//     saveState({
//       todos:store.getState().todos,
//       counter: store.getState().counter,
//     });
//   }, 3000));

//    return store ;
// };



 



