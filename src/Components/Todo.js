import React from 'react'

function Todo(props) {
  return (
    <div className="todo">
      {props.todo.text}
    </div>
  )
}

export default Todo
