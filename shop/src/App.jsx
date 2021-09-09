/* eslint-disable */
// library
import React from 'react';

// route
import { Route, Switch } from 'react-router-dom';

// style
import './App.css';

// component
import { Header } from './components';

// page
import { Main, Detail } from './pages';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/detail/:id" component={Detail} exact />
      </Switch>
    </div>
  );
}

export default App;
