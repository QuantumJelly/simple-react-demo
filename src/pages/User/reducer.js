const initialState = {
  users: [],
  loading: false,
};

// Use the initialState as a default value
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "user/PUT_USERS":
      return {
        ...state,
        users: action.payload,
      };
    case 'user/DELETE_USER':
      return {
        ...state,
        users: state.users.filter(u => u?.login?.uuid !== action.payload),
      };
    case 'user/ADD_USER':
      return {
        ...state,
        users: [action.payload, ...state.users],
      };
    case 'user/SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;