import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Notestate from './notestate/note';
import { useState } from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Navbar  from './components/navbar';
import './components/style.css'
import About from './components/About';
import Skill from './components/Skill';
import Projects from './components/projects';
import More from './components/more';
import Word from './components/word';
import Crypto from './components/crypto'
import Contact from './components/contact'
import LoadingBar from 'react-top-loading-bar';
import { ToastContainer } from 'react-toastify'; 
import { toast } from 'react-toastify';


function App() {
  const [progress, set] = useState(0);
  const showToast = (message) => {
    
      toast(message);
    }
  
  return (
    <div>
         
     <Notestate>
          <HashRouter> 
            <ToastContainer  position="top-center"autoClose={2000} />
            <Navbar></Navbar>
            <LoadingBar color='white' progress={progress} />
            <div>
              <Routes>
              <Route exact path='/' element={<Home/>} />
              <Route exact path='/Home' element={<Home/>} />
              <Route exact path='/About' element={<About/>} />
              <Route exact path='/Skills' element={<Skill/>} />
              <Route exact path='/Projects' element={<Projects/>} />
              <Route exact path='/more' element={<More/>} />
              <Route exact path='/word' element={<Word/>} />
              <Route exact path='/crypto' element={<Crypto/>} />
              <Route exact path='/Contact' element={<Contact set={set} showToast={showToast}/>}  />
              </Routes>
            </div>
          </HashRouter>
        </Notestate>
    
    </div>
  );
}

export default App;
