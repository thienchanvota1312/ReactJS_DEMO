import React from 'react';
import Home from './components/Home';
import Movies from './components/Movies';
import Series from './components/Series';
import Episode from './components/Episode';
import { Route, Redirect, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <React.Fragment>
    <NavBar/> 
    <div className="App"> 
    <Switch>
    <Route path="/home" component={Home} />
    <Route path="/movie" component={Movies} />
    <Route path="/series" component={Series} />
    <Route path="/episode" component={Episode} />
    <Redirect from='/' exact to="/home" />
    </Switch>
    </div>
    </React.Fragment>
  );
}

export default App;