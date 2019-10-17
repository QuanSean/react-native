//reducer user
import { AUTH_TYPES, EVENT } from "./types";

let initialState = {
  token: '',
  info: {},
  running: false,
  result: false,
  history:[],
  runhistory:true,
  key:false
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_TYPES.AUTH.LOGIN:
    case AUTH_TYPES.AUTH.VERIFY:
      state = {
        ...state,
        ...action.payload,
        running: false
      };
      break;
    case AUTH_TYPES.AUTH.LOGOUT:
        state = {
          token: '',
          info: {email:""},
          running: false,
          result: false,
          history:[],
          runhistory:true
        };
        break;

    case AUTH_TYPES.AUTH.REGISTER:
    case EVENT.RESULT:
      state = {
        ...state,
        ...action.payload,
      }
      break;
    case EVENT.RUNNING:
      state = {
        ...state,
        running: action.payload.running,
      }
      break;
    case AUTH_TYPES.AUTH.INFO: 
    state = {
      ...state,
      info: { ...action.payload.info }
    }
    break;
    case AUTH_TYPES.AUTH.INFO: 
    state = {
      ...state,
      info: { ...action.payload.info }
    }
    break;
    case AUTH_TYPES.GETKEY:
    state={
      ...state,
      key:action.payload.key
    }
    break;
    case AUTH_TYPES.AUTH.HISTORY: 
    state = {
      ...state,
      history:{...action.payload.history},
      runhistory:false
    }
    break;
    default:
      break;
  }
  return state;
}
