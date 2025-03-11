import Counter from './Store/Components/Counter';
import Todo from './Store/Components/AppTodo';
import {ResetApp} from  './Store/Components/resetApp';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div>
                   <ResetApp /> 
                </div>
                <div className="App">
                    <h3>Hello Redux Counter</h3>
                    <Counter />
                </div>
                <div>
                    <h3>Hello Redux Todo</h3>
                    <Todo />
                </div>
            </header>
        </div>
    );
}



export default App;
