import { useSelector, useDispatch } from 'react-redux';
import { selectActiveFilter } from '../Filters/filters-selectors';
import { setFilter } from '../Filters/filters-reducer';

const Filters = () => {
    const dispatch = useDispatch();
    const activeFilter = useSelector(selectActiveFilter);
    return (
        <div>
            <button
                onClick={() => dispatch(setFilter('all'))}
                style={{ color: activeFilter === 'all' ? 'red' : 'black' }}
                className = "btn"
            >
                {' '}
                all{' '}
            </button>
            <button
                onClick={() => dispatch(setFilter('active'))}
                style={{ color: activeFilter === 'active' ? 'red' : 'black' }}
                className = "btn"
            >
                {' '}
                active{' '}
            </button>
            <button
                onClick={() => dispatch(setFilter('completed'))}
                style={{
                    color: activeFilter === 'completed' ? 'red' : 'black',
                }}
                className = "btn"
            >
                {' '}
                completed{' '}
            </button>
        </div>
    );
};

export { Filters };
