import React  from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import  {cofigureStore}  from "./Store/rootReducer";
import './index.css';
import App from './App';

const store = cofigureStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
     <App />
    </Provider>
   </React.StrictMode>
);
