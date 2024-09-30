const initialState = {
  data: null,
  error: null,
};

const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ALBUM_SUCCESS":
      return {
        ...state,
        data: action.payload,
        error: null,
      };
    case "FETCH_ALBUM_FAILURE":
      return {
        ...state,
        data: null,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default albumReducer;
