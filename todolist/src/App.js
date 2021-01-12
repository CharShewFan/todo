import logo from './logo.svg';
import './App.css';
import React from 'react';
import LeftSideBar from "./components/LeftSideBar";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <LeftSideBar/>

    </div>
  );
}

export default App;
