import React, { useState, useRef, useEffect } from 'react';
import styled from "styled-components";
import DictionaryList from './DictionaryList';
import AddDictionary from './AddDictionary';

import { Route, BrowserRouter } from "react-router-dom";
import { withRouter } from 'react-router';

import { useDispatch } from 'react-redux';
import { connect } from "react-redux";
import { loadDict, createDict, loadDictFB } from './redux/modules/dict';
import { firestore } from './firebase';

// const componentDidMount = () => {
// 데이터 추가 -> dictionary.add({ word: "단어1", meaning: "뜻", example: "예시1"});
// 콜렉션을 찾고 -> add (대시보드에서 잘 추가되었는 지 확인)

// 데이터 수정 -> dictionary.doc("word_item1").update({ word: "단어1", meaning: "뜻", example: "예시1" });
// 콜렉션을 찾고 -> 도큐먼트 id로 set

// 데이터 삭제 -> dictionary.doc("word_item1").delete([도큐먼트 ID]);
// 콜렉션을 찾고 -> 도큐먼트 id로 delete

//   this.dictionary.load();

// }

function App() {

  return (

    <BrowserRouter>
      <div className="App">
        <Route path="/" exact component={DictionaryList} />
        <Route path="/addDict" component={AddDictionary} />
      </div>
    </BrowserRouter>

  );
}

export default App;