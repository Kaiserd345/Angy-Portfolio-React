import React from 'react';
import Navigation from './components/Navigation.js';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import PageRenderer from './page-renderer.js';


function App() {
  const user = {
    firstName: 'Dmytro',
    lastName: 'Arkhypov'
  }

  return (
    <Router>
      <div className="App">
        <Navigation user={user} />
        <Switch>
          <Route path="/:page" component={PageRenderer} />
          <Route path="/" render={() => <Redirect to="/home" />} />
          <Route component={() => 404} />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
