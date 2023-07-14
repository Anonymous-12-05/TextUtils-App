import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


import { useState } from 'react';
function App() {
  const[mode,setmode]=useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
    setmode('dark')
    document.body.style.backgroundColor='#042743';
    showAlert("Dark mode has been enabled","success");
    }
    else{
      setmode("light");
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
    <>
        {/* <BrowserRouter> */}
      <Navbar title="TextUtils" mode ={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">

        {/* <Routes> */}
          {/* <Route path="/" element={<TextForm heading = "Enter your text to analyse" mode ={mode} showAlert = {showAlert}/>} /> */}
          <TextForm heading = "Enter your text to analyse" mode ={mode}/>

          {/* <Route path="about" element={<About />} /> */}
        {/* </Routes> */}
      </div>
      {/* // </BrowserRouter> */}
    </>
  );
}

export default App;