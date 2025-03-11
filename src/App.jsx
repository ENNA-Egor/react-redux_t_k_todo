import Counter from './Store/Components/Counter';
import Todo from './Store/Components/AppTodo';
import {ResetApp} from  './Store/Components/ResetApp';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="App">
                    <h2>Hello Redux Counter</h2>
                    <Counter />
                </div>
                <div>
                    <h2>Hello Redux Todo</h2>
                    <Todo />
                </div>
                <div>
                   <ResetApp/> 
                </div>
            </header>
        </div>
    );
}



export default App;
