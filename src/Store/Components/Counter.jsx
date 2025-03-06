import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../Counter/counter-reduser';

const Counter = () => {
    const count = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <div className="App">
            <h2>{count}</h2>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(reset())}>reset</button>
        </div>
    );
};
export default Counter;
