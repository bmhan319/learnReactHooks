import React, { useState } from 'react'

export default function TodoForm(props) {
  const [value, setValue] = useState('')
  const handleChange = (e) => { setValue(e.target.value) }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!value) {return}
    props.addTodo(value)
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" 
             className="input" 
             value={value} 
             placeholder="Add Todo..." 
             onChange={ handleChange } />
    </form>
  )
  
}
