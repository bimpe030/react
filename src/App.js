import React from 'react';
import './App.css';
import Home from './components/Home/home.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import SignUp from './components/sign-up/sign-up';
import SignIn from './components/sign-in/sign-in';
import Scrumboard from './components/scrumboard/scrumboard';


class App extends React.Component{
  render (){
    return (
      <BrowserRouter>
      <div className="App">
        <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/scrumboard' element={<Scrumboard/>} />
        </Routes>
      </div>
      </BrowserRouter>
    )
  }
}

export default App;
