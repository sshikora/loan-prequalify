import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoanForm from './components/LoanForm/index';

import './App.css';

function App() {
  return (
    <div className="App">
      <LoanForm/>
    </div>
  );
}

export default App;
