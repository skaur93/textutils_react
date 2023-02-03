import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import {
  BrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert= (message, type) => {
    setAlert({
      message:message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1200);
  }
  const toggleMode = () => {
    if(mode === 'light' ){
      setMode('dark');
      document.body.style.backgroundColor = '#212529';
      showAlert("Dark mode enabled", "suceess");
      document.title = 'TextUtils - Dark mode'
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode enabled", "suceess");
      document.title = 'TextUtils - Light mode'
    }
  }
  return ( 
    <>
<BrowserRouter>
      <Navbar title="TextUtilss" mode={mode} toggleMode={toggleMode}></Navbar>
      <Alert alert={alert}></Alert>
      <div className="container my-3">
      <Routes>
        <Route path="/about" element={<About/>} />
        <Route path="/" element={<Textform heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />} />
      </Routes>
      
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
