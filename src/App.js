import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, {Fragment} from 'react';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';

const App = () => (
<Router>
      <Fragment>
          <Navbar />
          <Landing />
      </Fragment>
      <h1>Hello</h1>
</Router>
);

export default App;
