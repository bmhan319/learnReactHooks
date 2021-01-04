import React, { useState } from 'react'
import Todo from './Components/Todo'
import TodoForm from './Components/TodoForm'
import Component2 from './Components/Component2'

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
    newTodos[index].isCompleted = !todos[index].isCompleted
    setTodos(newTodos)
  }

  const removeTodo = (index) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (  
    <div className="App">
      <div className="todo-list">
        { todos.map( (todo, index)=>(
          <Todo key={index} 
                index={index} 
                todo={todo} 
                completedTodo={completedTodo} 
                removeTodo={removeTodo}/>
         ))}
        <TodoForm addTodo={addTodo} />
      </div>

      <Component2 />
    </div>
  );
}

export default App;
