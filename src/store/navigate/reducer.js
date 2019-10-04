import { NAVIGATE } from "./type";

let initialState = {
    navigate:'aaaa',
    demo:''
};

export const navigateReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case "NAVIGATE.SET":{
            state={...state,
                navigate:action.payload.navigate     
            }
            break;
        }
        default:
        break;
        case  "EVENT.RESULT":
            state = {
              ...state,
              demo:action.payload.demo,
            }
            break;
    }

    return state;
}