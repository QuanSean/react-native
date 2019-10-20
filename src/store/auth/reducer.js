//reducer user
import { AUTH_TYPES, EVENT,LANGUAGE } from "./types";

let initialState = {
  token: '',
  info: {},
  running: false,
  result: false,
  history:[],
  runhistory:true,
  key:false,
  verify:false,
  ve:false,
  vi:true,
  getinfo:false,
  login:false
  // v:false
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_TYPES.AUTH.LOGIN:
      state = {
        ...state,
        ...action.payload,
        login:action.payload.login
        // running: false
      };
      break;
    case AUTH_TYPES.AUTH.VERIFY:
      {
        state = {
          ...state,
          ...action.payload,
          ve:action.payload.ve
          // running: false
        };
        break;
      }
      case AUTH_TYPES.AUTH.CHANGEV:
        {
          state={
            ...state,
            ve:action.payload.ve
          }
        }
        break;
    case AUTH_TYPES.AUTH.LOGOUT:
        state = {
          token: '',
          info: {email:""},
          running: false,
          result: false,
          history:[],
          runhistory:true,
          vi:state.vi
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
      info: { ...action.payload.info },
      getinfo:action.payload.getinfo
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
    case LANGUAGE.LANGUAGE:
      state={
        ...state,
        vi:!state.vi
      }
     break; 
    case AUTH_TYPES.AUTH.V: 
    state = {
      ...state,
      v:action.payload.v
    }
    break;
    default:
      break;
  }
  return state;
}
