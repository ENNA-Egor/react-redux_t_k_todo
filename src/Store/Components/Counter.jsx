import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../Counter/counter-reduser';

const Counter = () => {
    const count = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <div className="App">
            <h3>{count}</h3>
            <button onClick={() => dispatch(decrement())} className = "btn">-</button>
            <button onClick={() => dispatch(increment())} className = "btn">+</button>
            <button onClick={() => dispatch(reset())} className = "btn">reset</button>
        </div>
    );
};
export default Counter;
