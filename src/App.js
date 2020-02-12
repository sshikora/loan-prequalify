import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoanForm from './components/LoanForm'
import SignupForm from './components/SignUp'
import NoLoan from './components/NoLoan'

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/noloan">
              <NoLoan />
            </Route>
            <Route path="/signup">
              <SignupForm />
            </Route>
            <Route path="/">
              <LoanForm />
            </Route>
          </Switch>
        </div>
      </Router>      
    </div>
  );
}

export default App;
