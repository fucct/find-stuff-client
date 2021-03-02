import React from 'react';
import './App.css';
import Home from './components/home/Home';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/login/Login';
import { Join } from './components/join/Join';
import Create from './components/create/Create';
import HomeHeader from './components/home/HomeHeader';

const App = () => {
  return (
    <RecoilRoot>
      <div className="App">
        <HomeHeader />
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/join" component={Join} />
            <Route path="/create" component={Create} />
          </Switch>
        </Router>
      </div>
    </RecoilRoot>
  );
};

export default App;
