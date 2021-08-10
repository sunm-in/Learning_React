// library
import { createStore } from 'redux';
// store는 date를 넣는 곳(state), 기본적으로 data를 넣을 수 있는 장소를 생성한다.
// state -> application에서 바뀌는 data

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

number.innerText = 0;

const ADD = 'ADD';
const MINUS = 'MINUS';

// reducer
// reducer는 함수고 data를 수정(modify)한다.
const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

// store 생성
// store -> data를 저장하는 곳
const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);

// countModifier에 action 보내는 방법
// dispatch -> countStore.dispatch({ type: 'ADD' });
