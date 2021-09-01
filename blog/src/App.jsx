/* eslint-disable */
import React, { useState } from 'react';
import './App.css';

// component
import Modal from './components/Modal';

function App() {
  const [title, setTitle] = useState(['여행지 추천', '카페 추천', '맛집 추천']);
  const [like, setLike] = useState([0, 0, 0]);
  const [modal, setModal] = useState(false);
  const [modalTitle, setModalTitle] = useState(0);

  const changeTitle = () => {
    let newTitle = [...title];
    newTitle.sort();
    setTitle(newTitle);
  };

  const addLike = (i) => {
    let likeArray = [...like];
    likeArray[i]++;
    setLike(likeArray);
  };

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>

      {title.map((title, i) => {
        return (
          <div className="list" key={i}>
            <h3
              onClick={() => {
                setModalTitle(i);
              }}
            >
              {title}
              <span
                onClick={() => {
                  addLike(i);
                }}
              >
                👍
              </span>
              {like[i]}
            </h3>
            <p>2월 17일 발행</p>
            <hr />
          </div>
        );
      })}

      <button
        onClick={() => {
          setModal(!modal);
        }}
      >
        열고닫기
      </button>

      {modal === true ? <Modal title={title} modalTitle={modalTitle} /> : null}
    </div>
  );
}

export default App;
