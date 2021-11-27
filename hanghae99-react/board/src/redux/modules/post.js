import { firestore } from "../../shared/firebase";

const board_db = firestore.collection("board");

// action
const LOAD = "board/LOAD";
const CREATE = "board/CREATE";

// initialState
const initialState = {
  list: [
    { title: "글제목1", author: "글쓴이1", content: "글내용1" },
    { title: "글제목2", author: "글쓴이2", content: "글내용2" },
    { title: "글제목3", author: "글쓴이3", content: "글내용3" },
  ],
};

// action creator
export const loadBoard = (board) => {
  return { type: LOAD, board };
};

export const createBoard = (board) => {
  return { type: CREATE, board };
};

// 파이어베이스 통신하는 부분
export const loadBoardFB = () => {
  return function (dispatch) {
    board_db.get().then((docs) => {
      let board_data = [];

      docs.forEach((doc) => {
        // 도큐먼트 객체 확인: console.log(doc) // 데이터 가져오기: doc.data() // id 가져오기: doc.id
        console.log(doc);
        if (doc.exists) {
          board_data = [...board_data, { id: doc.id, ...doc.data() }];
        }
      });

      console.log(board_data);
      dispatch(loadBoard(board_data));
    });
  };
};

export const addBoardFB = (board) => {
  return function (dispatch) {
    let board_data;
    board_db
      .add(board)
      .then((doc) => {
        board_data = { ...board, id: doc.id };
        console.log(board_data)
      })
      .then((res) => dispatch(createBoard(board_data)));
  };
};

// reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "board/LOAD": {
      if (action.board.length > 0) {
        return { list: action.board };
      }
      return state;
    }

    case "board/CREATE": {
      const newBoardList = [...state.list, action.board];
      return { list: newBoardList };
    }
    default:
      return state;
  }
}
