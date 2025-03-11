import { useDispatch } from 'react-redux';
import { addTodo } from '../Todos/todos-reduser';

const NewTodo = () => {
    //Добавляем данные в стор
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addTodo(event.target.title.value, event.target.title1.value));
        event.target.reset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder="new todo" className = "btn"/>
            <input type="text" name="title1" placeholder="new todo1" className = "btn"/>
            <input type="submit" value="Add Todo" className = "btn"/>
        </form>
    );
};

export default NewTodo;
