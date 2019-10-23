//reducer user
import { BOOK_TYPES } from "./types";

let initialState = {
  allBook: [],
  info: {},
  arrCart:[]
  // v:false
};

export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK_TYPES.GETALLBOOK:
      state = {
        ...state,
        allBook: action.payload.allBook
        // running: false
      };
      break;
      case BOOK_TYPES.INFOBOOK:
        state = {
          ...state,
          info: action.payload.info
        };
        break;
      case BOOK_TYPES.ARRCART:
        state={
          ...state,
          arrCart:state.arrCart.push(action.payload.item)
        }
  }

  return state;
}
