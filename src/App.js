import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import React from 'react';

import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Header from './components/Header'
import Home from './components/Home';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <hr />
        <Switch>
          <Route path='/portfolio/' exact component={Home} />
          <Route path='/portfolio/projects' component={Projects} />
          <Route path='/portfolio/about-me' component={About} />
          <Route path='/portfolio/contact' component={Contact} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
