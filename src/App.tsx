import React from 'react';
import logo from './logo.svg';
import './App.css';

import About from './view/About';
import Shop from './view/Shop';
import Nav from './Nav';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (

    <div className="App">

      <Router>
        <Nav></Nav>
        <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/about'  component={About}></Route>
        <Route path='/shop'  component={Shop}></Route>
        </Switch>
        <header className="App-header">

        
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Nav here
        </a>

        </header>
      </Router>
    </div>
  );
}

const Home = ()=>{
  
  return(<div>
    <h1>Home Page</h1>
  </div>)
}

export default App;
