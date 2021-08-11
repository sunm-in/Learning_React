// import { createStore } from 'redux';
import {
  configureStore,
  // createAction,
  // createReducer,
  createSlice,
} from '@reduxjs/toolkit';

// getState -> state 전달
// dispatch -> store 혹은 reducer에 메세지를 전달

/*
// action creator
const addToDo = createAction('ADD');
const deleteToDo = createAction('DELETE');

// reducer
// createReducer를 사용하면 state를 수정할 때 쉽게 만들어준다.
const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    // state를 mutate 하면 아무것도 리턴하지 않는다.
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteToDo]: (state, action) =>
    // state를 mutate(새로운 형태로 변형)하지 않으면 새로운 state를 리턴해준다. -> ✅ 뭔가를 리턴할 땐 꼭 새로운 state여야 한다.
    state.filter((toDo) => toDo.id !== action.payload),
}); 
*/

const toDos = createSlice({
  name: 'toDosReducer',
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});

const store = configureStore({ reducer: toDos.reducer });

export const { add, remove } = toDos.actions;

export default store;
