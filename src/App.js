import React, { useState } from 'react'
import Todo from './Components/Todo'

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Learn React',
      isCompleted: false
    },
    {
      text: 'Meet friend for Lunch',
      isCompleted: false
    },
    {
      text: 'Build really cool Todo App',
      isCompleted: false
    }
  ])

  return (
    <div className="App">
      <div className="todo-list">
        { todos.map( (todo, index)=>(
          //<div>{todo.text}</div>
          <Todo key={index} index={index} todo={todo} />
         ) ) }
      </div>
    </div>
  );
}

export default App;
