export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: 'nickname1',
      },
      content: '첫 번째 게시글 #test #test2 #test3',
      Images: [
        {
          src: 'https://joyvancouver.com/wp-content/uploads/2021/09/iphone13_210914.jpg',
        },
        {
          src: 'https://betanews.net/imagedb/thumb/2021/1001/33740d8e.jpg',
        },
        {
          src: 'https://s3.orbi.kr/data/file/united2/edb6f799d25e48d5b845037231de8163.jpg',
        },
      ],
      Comments: [
        {
          User: {
            nickname: 'nick1',
          },
          content: 'comment content 1',
        },
        {
          User: {
            nickname: 'nick2',
          },
          content: 'comment content2',
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = 'ADD_POST';

export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: 'dummy data',
  User: {
    id: 1,
    nickname: 'nickname1',
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
