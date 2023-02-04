import './App.css';
import Header from './myComponents/header';
import Footer from './myComponents/footer';
import Todos from './myComponents/todos';
import React, { useState, useEffect } from 'react';
import AddTodo from './myComponents/AddTodo';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {About} from './myComponents/About'
function App() {
  let initTodos;
  if(localStorage.getItem("todos")===null)
    initTodos=[];
  else 
    initTodos = JSON.parse(localStorage.getItem("todos"));

  const onDelete=(todo)=>{
    console.log("I am Deleting",todo);
    // this way of deleting doesn't work in react use useState hook
    // let idx = todos.indexOf(todo);
    // todos.splice(idx,1);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }

  const addTodo=(title,desc) =>{
    let sno;
    if(todos.length>0)
      sno = todos[todos.length-1].sno+1;
    else 
      sno=1;
    let myTodo = {
      sno:sno,
      title:title,
      description:desc
    }
    console.log(myTodo);
    setTodos([...todos,myTodo]);
  }

  const [todos,setTodos] = useState(initTodos);
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  return (
    <>
    <Router>
    <Header title="My Todo Lists" searchBar={true}/>
    <Routes>
    {/* <Route exact path="/" render={()=>{
      return (
        <>
        <AddTodo addTodo={addTodo}/>
        <Todos todos={todos} onDelete={onDelete}/>
        </>)
      }}> */}
      <Route exact path='/' element={
         <>
         <AddTodo addTodo={addTodo}/>
         <Todos todos={todos} onDelete={onDelete}/>
         </>
      }/>
      <Route exact path="/about" element={<About/>}/>
    </Routes>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
