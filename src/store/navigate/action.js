import { NAVIGATE } from "./type";

export const getNavigate = (navigate) => {
        return dispatch=>
            dispatch({
            type:"NAVIGATE.SET",
            payload:{
                navigate:navigate
                }
        })
    
}

export const resetResult = (navigate) => {
    return dispatch => {
        dispatch({
            type: "EVENT.RESULT",
            payload: {
                navigate: navigate
            }
        })
    }
}