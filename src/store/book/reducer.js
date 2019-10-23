//reducer user
import { BOOK_TYPES } from "./types";

let initialState = {
  allBook: [],
  info: {},
  arrCart: [],
  statusArrCart: false
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
      var arr=state.arrCart
      var count=0
      arr.map(item=>{
        if (item._id==action.payload.item._id)
        {
          count++
        }
      })
      if (count==0)
      {
        arr.push(action.payload.item)
      }
      state = {
        ...state,
        arrCart: arr
      }
    case BOOK_TYPES.CHANGESTATUSARRCART:
      state = {
        ...state,
        statusArrCart:action.payload.statusArrCart
      }
  }

  return state;
}
