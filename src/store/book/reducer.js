//reducer user
import { BOOK_TYPES} from "./types";

let initialState = {
  allBook:[]
  // v:false
};

export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK_TYPES.GETALLBOOK:
      state = {
        ...state,
        allBook:action.payload.allBook
        // running: false
      };
      break;
    
    
  }
  return state;
}
