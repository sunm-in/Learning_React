import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

// pages
import Home from './pages/Home';
import About from './pages/About';

// component
import Profiles from './components/Profiles';
import HistorySample from './components/HistorySample';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/history">History 예제</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path={['/about', '/info']} component={About} exact />
        <Route path="/profiles" component={Profiles} exact />
        <Route path="/history" component={HistorySample} exact />
        <Route
          // path를 따로 정의하지 않으면 모든 상황에 렌더링됨
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다:</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
