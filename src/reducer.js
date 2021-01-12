//this is initial state of data layer that is no user
export const initialState = {
  user: null,
};

export const actionTypes = {
  SET_USER: 'SET_USER',
};

//this changes the user to login user
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;