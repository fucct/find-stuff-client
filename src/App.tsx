import React from 'react';
import './App.css';
import Home from './components/home/Home';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/login/Login';
import LoginFail from './components/login/LoginFail';

const App = () => {
  return (
    <RecoilRoot>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/login" component={Login} />
          </Switch>
        </Router>
      </div>
    </RecoilRoot>
  );
};

export default App;
