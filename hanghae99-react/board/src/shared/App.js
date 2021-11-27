import React from "react";
import styled from "styled-components";

import { Route, BrowserRouter } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

import PostList from "../pages/PostList";
import PostWrite from "../pages/PostWrite";
import PostDetail from "../pages/PostDetail";
import Header from "../components/Header";

import { firestore } from "./firebase";

function App() {
  return (
    <BrowserRouter>
      {/* <ConnectedRouter history={history}> */}
      <BoardWrap>
        <Route path="/" exact component={PostList} />
        <Route path="/write" exact component={PostWrite} />
        <Route path="/detail" exact component={PostDetail} />
        <Route path="/detail/:index" exact component={PostDetail} />
      </BoardWrap>
      {/* </ConnectedRouter> */}
    </BrowserRouter>
  );
}

const BoardWrap = styled.div`
  max-width: 900px;
  margin: auto;
`;

export default App;
