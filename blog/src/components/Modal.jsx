import React from 'react';

const Modal = (props) => {
  return (
    <div className="modal">
      <h2>{props.title[props.modalTitle]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
};

export default Modal;
