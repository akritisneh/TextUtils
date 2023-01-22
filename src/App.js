
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import React from "react";
import{
  BrowserRouter as Router,
  Routes,
  Route,
}from "react-router-dom";

function App() {
  const [mode,setmode]=useState('light');
  const[alert,setAlert]=useState(null);
  
  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=> {
      setAlert(null);
    },1500);
  }
  const togglemode=()=>{
    if(mode ==='light'){
      setmode("dark");
      document.body.style.backgroundColor="#3d3d3e";
      showAlert(" Dark mode enabled","Success");
      document.title='TextEdit-Dark mode';
      // setInterval(()=>{
      //   document.title='TextEdit is an Amazing mode';
      // },2000);
      // setInterval(()=>{
      //   document.title='Install TextEdit Now';
      // },1500);
    }
    else{
    setmode('light');
    document.body.style.backgroundColor="white";
    showAlert(" Light mode enabled","Success");
    document.title='TextEdit-Light mode';
    }
  }
  return (
    <>
  {/*<Navbar title="TextEdit" about="About"/>*/} 
  <Router>
  <div className="container my-3">
  <Navbar title='TextEdit' mode={mode} togglemode={togglemode} />
  <Alert alert={alert}/>
    <Routes>
      <Route exact path="/about" element={<About />} />
        {/*<About />*/}
      <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter Text" mode={mode}/>} />
        {/*<Textform showAlert={showAlert} heading="Enter Text" mode={mode}/>*/}
    </Routes>
  </div>
  </Router>
   </> 
  );
}

export default App;
