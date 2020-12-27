import React, { useState } from 'react'
import Todo from './Components/Todo'
import TodoForm from './Components/TodoForm'

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

  const addTodo = (text) => {
    const newTodos = [...todos, {text}]
    setTodos(newTodos)
  }

  const completedTodo = (index) => {
    const newTodos = [...todos]
    newTodos[index].isCompleted = true
    setTodos(newTodos)
  }

  return (  
    <div className="App">
      <div className="todo-list">
        { todos.map( (todo, index)=>(
          <Todo key={index} index={index} todo={todo} completedTodo={completedTodo} />
         ) ) }
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
