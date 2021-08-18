import {TodoItem} from './components'

import './App.css';

function App() {
  return (
    <div className="App">
      <ul>
        <TodoItem todo="item 1" />
        <TodoItem todo="item 2" />
        <TodoItem todo="item 3" />
      </ul>
    </div>
  );
}

export default App;
