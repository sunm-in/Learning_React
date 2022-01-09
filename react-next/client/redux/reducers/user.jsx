export const initialState = {
  isLoggedIn: false,
  me: null,
  signUpData: {},
  loginData: {},
};

export const login = (data) => {
  return {
    type: 'LOG_IN',
    data,
  };
};

export const logout = () => {
  return {
    type: 'LOG_OUT',
  };
};

export const loginAction = (data) => {
  return (dispatch, getState) => {
    dispatch(loginRequestAction());
    axios
      .post('/api/login')
      .then((res) => {
        dispatch(loginSuccessAction(res.data));
      })
      .catch((err) => {
        dispatch(loginFailureAction(err));
      });
  };
};

export const loginRequestAction = (data) => {
  return {
    type: 'LOG_IN_REQUEST',
    data,
  };
};

export const loginSuccessAction = (data) => {
  return {
    type: 'LOG_IN_SUCCESS',
    data,
  };
};

export const loginFailureAction = (data) => {
  return {
    type: 'LOG_IN_FAILURE',
    data,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...state,
        isLoggedIn: true,
        me: action.data,
      };
    case 'LOG_OUT':
      return {
        ...state,
        isLoggedIn: false,
        me: null,
      };
    default:
      return state;
  }
};

export default reducer;
