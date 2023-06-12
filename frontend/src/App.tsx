import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import ClassSignup from './components/signup';
import BackendData from './components/backendData';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<ClassSignup />} />
            <Route path="/backend" element={<BackendData/>} />
          </Routes>
      </BrowserRouter>
   
      
    </div>
  );
}

export default App;
