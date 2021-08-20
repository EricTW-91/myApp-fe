import React from 'react';
import './App.css';
import Wrapper from './components/wrapper/wrapper'
import Login from './views/login';
import Register from './views/register';
import Home from './views/home'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Wrapper>
      <Router>
        <Switch>
          {/* Make sure to have 'exact' at home route */}
          <Route path='/' exact component={Home}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/register' component={Register}></Route>
        </Switch>
      </Router>
    </Wrapper>
  );
}

export default App;
