
import NewTodo from "./NewTodo";
import TodoList from './TodoList';
import {Filters} from './Filters';


import '../../App.css';

export default function Todo() {
    return (
        <div className="App">
            <NewTodo />
            <Filters/>
            <TodoList />
        </div>
    );
}

