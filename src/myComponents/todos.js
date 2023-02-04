import React from 'react'
import Item from './todoItem'
const todos = (props) => {
  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto"
  }
  return (
    <div className='container my-5' style={myStyle}>
      <h3 className='text-center my-3'>Todos List</h3>
      {props.todos.length===0?"No Todos to display!!": 
      props.todos.map((todo)=>{
        return (
        <Item todo={todo} key={todo.sno} onDelete={props.onDelete}/>
      )})
      }
    </div>
  )
}

export default todos;
