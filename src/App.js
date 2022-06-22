import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, {Fragment} from 'react';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

const App = () => (
<BrowserRouter>
    <Fragment>
      <Navbar />
      <Route  path='/' element={<Landing />} />
      <Routes>
        <Route path='/login' element = {<Login />} />
        <Route path='register' element = {<Register />} />
      </Routes>
    </Fragment>
</BrowserRouter>
);

export default App;
