import React from 'react';
import './App.css';
import Input from './components/Input';
import TodoItem from './components/TodoItem';

const todoList = [
  {
    item: 'todo',
    done: false,
    id: 65548448787
  },
  {
    item: 'todo2',
    done: true,
    id: 65548448783
  }
]

function App() {
  return (
    <div className="app">
      <div className="app_container">
        <div className="app_todoContainer">
          {todoList.map((item) => (
            <TodoItem
              name={item.item}
              done={item.done}
              id={item.id}
            />
          ))}
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
