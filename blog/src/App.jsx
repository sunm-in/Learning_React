/* eslint-disable */
import React, { useState } from 'react';
import './App.css';

function App() {
  let [title, setTitle] = useState(['맛집 추천', '카페 추천', '여행지 추천']);
  let [like, setLike] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <div className="list">
        <button
          onClick={() => {
            setTitle([
              '분위기 좋은 맛집',
              '분위기 좋은 카페',
              '놀거리 많은 여행지',
            ]);
          }}
        >
          제목 변경
        </button>
        <h3>
          {title[0]}
          <span
            onClick={() => {
              setLike(like + 1);
            }}
          >
            👍
          </span>
          {like}
        </h3>

        <p>2월 17일 발행</p>
        <hr />
        <h3>{title[1]}</h3>
        <p>2월 17일 발행</p>
        <hr />
        <h3>{title[2]}</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
