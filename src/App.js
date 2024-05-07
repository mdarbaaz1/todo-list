
import './App.css';
import Header from './My component/Header';
import Todos from './My component/Todos';
import Footer from './My component/Footer';
import React, {useState ,useEffect}  from 'react';
import AddTodo from './My component/AddTodo';
import About from './My component/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";



function App() {
  let initTodo;
    if(localStorage.getItem("todos")===null){
      initTodo=[];
    }
    else{
      initTodo=JSON.parse(localStorage.getItem("todos"))
    }
    const onDelete=(todo)=>{
       
      settodos(todos.filter((e)=>{
        return e!==todo;
      }))
       localStorage.setItem("todos",JSON.stringify(todos));
    }
    const addTodo=(title,desc)=>{
      let sno;
      if(todos.length===0)
      {
        sno=0;
      }
      else{
        sno=todos[todos.length-1].sno+1;
      }
        
       const myTodo={
         sno: sno,
         title: title,
         desc:  desc
       }
       settodos([...todos,myTodo]);
       
       
    }
    const [todos,settodos]=useState(initTodo);
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
   },[todos])
  return (
    <>
    <Router>
      <Header title="My Todos List"/>
      <Routes>
          <Route  path="/about" element={<About/>}
          />
          <Route  path="/" element={
            
              <>
              <AddTodo addTodo={addTodo}/>
              <Todos todos={todos} onDelete={onDelete}/>
              </>
          }/>
          
        </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
