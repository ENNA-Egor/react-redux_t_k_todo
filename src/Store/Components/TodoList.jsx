import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../Todos/todos-reduser';
import {selectVisibleTodos, selectActiveTodos} from '../Todos/todos-selector';
import {selectActiveFilter} from '../Filters/filters-selectors';
import '../../App.css';


const TodoList = () => { // отрисовываем данные
      const activeFilter = useSelector(selectActiveFilter);
      const dispatch = useDispatch();
      const todos = useSelector((state) => selectVisibleTodos(state, activeFilter));
      return (
        <ul>
          {todos.map((todo) => (
            <li key={todo.title}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
              />{" "}
              {"Ф.      "}{todo.title}{" И.     "}{todo.title1}
              <button 
              onClick={()=>dispatch(removeTodo(todo.id))}>delete</button>
            </li>
          ))}
        </ul>
      );
    };


    export default TodoList