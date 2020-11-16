import React from 'react';
import './App.css';
import Home from './components/home/Home';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Sample from './components/login/Sample';

const App = () => {
  return (
    <RecoilRoot>
      <Router>
        <div className="App">
          <Home />
        </div>
        <Switch>
          <Route path="/login">
            <Sample />
          </Route>
        </Switch>
      </Router>
    </RecoilRoot>
  );
};

export default App;
