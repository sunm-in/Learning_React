// dict.js
import { func } from "prop-types";
import { firestore } from "../../firebase";

const dictionary_db = firestore.collection("dictionary");

// Action
const LOAD = 'dict/LOAD';
const CREATE = 'dict/CREATE';
// const UPDATE = 'my-app/dict/UPDATE';
// const REMOVE = 'my-app/dict/REMOVE';

const initialState = {
    list: [
        { word: "ㅎ1ㅎ1", meaning: "히히를 변형한 단어. 숫자 1을 'ㅣ'로 쓴다.", example: "저 친구가 초콜릿을 줬어. ㅎ1ㅎ1" },
        { word: "ㅋ1ㅋ1", meaning: "키키를 변형한 단어. 숫자 1을 'ㅣ'로 쓴다.", example: "진짜 웃겨. ㅋ1ㅋ1" },
        { word: "ㄱ1ㄱ1", meaning: "기기를 변형한 단어. 숫자 1을 'ㅣ'로 쓴다.", example: "리액트 공부하러. ㄱ1ㄱ1" },
    ]
};

// Action Creators
export const loadDict = (dict) => {
    return { type: LOAD, dict };
}

export const createDict = (dict) => {
    return { type: CREATE, dict };
}

// export const addDictList = (newDictId) => {
//     { return {type: CREATE, newDictId}; }
// }

// export function updateDict(dict) {
//     return { type: UPDATE, dict };
// }

// export function removeDict(dict) {
//     return { type: REMOVE, dict };
// }

// 파이어베이스랑 통신하는 부분
export const loadDictFB = () => {
    return function (dispatch) {

        dictionary_db.get().then((docs) => {
            let dictionary_data = [];

            docs.forEach((doc) => {
                // 도큐먼트 객체 확인: console.log(doc) // 데이터 가져오기: doc.data() // id 가져오기: doc.id
                if (doc.exists) {
                    dictionary_data = [...dictionary_data, {id: doc.id, ...doc.data()}];
                }
            })
            console.log(dictionary_data);
            dispatch(loadDict(dictionary_data));

        })
    }
}

export const addDictFB = (dictionary) => {
    return function (dispatch) {
        let dictionary_data;
        dictionary_db
            .add(dictionary)
            .then((doc) => {
                dictionary_data = {...dictionary, id: doc.id};
                
        })
        .then((res) => dispatch(createDict(dictionary_data))); 
        // .catch((err) => {
        //     console.log(err);
        //     window.alert("오류입니다. 다시 시도해주세요.");
        // });        
    };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        // do reducer stuff
        case "dict/LOAD": {
            if (action.dict.length > 0) {
                return { list: action.dict }
            }
            return state;
        }

        case "dict/CREATE": {
            const newDictList = [
                ...state.list,
                action.dict,
            ];
            return { list: newDictList };
        }
        default:
            return state;
    }
}
