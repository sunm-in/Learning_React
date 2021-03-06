import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Detail from '../Pages/Detail';
import Home from '../Pages/Home';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home}></Route>
      <Route path="/:id" component={Detail}></Route>
    </Router>
  );
}

export default App;
