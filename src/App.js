import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/Navbar/Navbar';


import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/Home/Home/Home';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Home/>
      {/* <Sidebar></Sidebar> */}
    </Router>
  );
}

export default App;
