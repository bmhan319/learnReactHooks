import React from 'react'

function Todo(props) {
  return (
    <div style={{textDecoration: props.todo.isCompleted ? 'line-through' : ''}} className="todo">
      {props.todo.text}
      <div>
        <button onClick={ ()=>{props.completedTodo(props.index)} }>Complete</button>
      </div>
    </div>
  )
}

export default Todo
