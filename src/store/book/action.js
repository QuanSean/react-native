import { BookService } from '../../services/book';
import { ERROR, BOOK_TYPES } from './types'
import { async } from 'q';
import {AsyncStorage} from 'react-native';

const authenAction = (type, token, email, result) => {
    return {
        type: type,
        payload: {
            result: result,
            token: token,
            email: email,
        }
    }
}
export const v=()=>{
    return dispatch => {
        dispatch({
            type: AUTH_TYPES.AUTH.V,
            payload: {
                v:true
            }
        })
    }
}
export const getAllBook=()=>{
    return async (dispatch)=>{
        let getAllBook=BookService.getAllBook()
        getAllBook
        .then(
            res=>{
                if (!res.err)
                {
                    if (res.data.success)
                    {
                        return dispatch({
                            type: BOOK_TYPES.GETALLBOOK,
                            payload: {
                                allBook:res.data.detail
                            }
                        })
                    }
                    else{
                        return dispatch({
                            type: BOOK_TYPES.GETALLBOOK,
                            payload: {
                                allBook:[]
                            }
                        })
                    }
                }
                else
                {
                    return dispatch({
                        type: BOOK_TYPES.GETALLBOOK,
                        payload: {
                            allBook:[]
                        }
                    })
                }
            }
        )        
    }
}

export const login = (email, password) => {
    return async (dispatch) => {
        let loginuser = AuthenticationService.login(email, password);
        loginuser
            .then(
                res => {
                    if (!res.err) {
                        // console.log (res.data.token)
                        if (res.data.success) {
                            AsyncStorage.setItem('token', res.data.token);
                            return dispatch({
                                type: AUTH_TYPES.AUTH.LOGIN,
                                payload: {
                                    result: res.data.success,
                                    login:true
                                }
                            })
                        }
                        else {
                            return dispatch({
                                type: AUTH_TYPES.AUTH.LOGIN,
                                payload: {
                                    result: false,
                                    login:false
                                }
                            });
                        }
                    }
                    else {
                        dispatch({
                            type: AUTH_TYPES.AUTH.LOGIN,
                            payload: {
                                result: false,
                                token: '',
                                email: '',
                                login:false
                            }
                        })
                    }
                }
            )
    }
}
