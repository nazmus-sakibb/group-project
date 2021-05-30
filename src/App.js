import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Incubator from "./Pages/Incubator/Incubator";
import Home from "./Pages/Home/Home";
<<<<<<< HEAD
import LearnPage from "./Pages/LearnPage/LearnPage";
=======
>>>>>>> b3711e3d41a5b0b5af645ca2bb94a0fd0b0ad2b7

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path='/incubator'>
          <Incubator></Incubator>
        </Route>
        <Route path='/learnPage'>
         <LearnPage></LearnPage>
        </Route>
        <Route exact path='/'>
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;