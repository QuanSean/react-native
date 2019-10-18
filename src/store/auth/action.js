import { AuthenticationService } from '../../services/authentication';
import { ERROR, AUTH_TYPES, EVENT } from './types'
import { async } from 'q';
import { promiseProvider } from './../../services/fetch'
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
                                    result: res.data.success
                                }
                            })
                        }
                        else {
                            return dispatch({
                                type: AUTH_TYPES.AUTH.LOGIN,
                                payload: {
                                    result: false
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
                                email: ''
                            }
                        })
                    }
                }
            )
    }
}
export const loginFB = (accountIdFb) => {
    return async (dispatch) => {
        let loginuser = AuthenticationService.loginFb(accountIdFb);
        loginuser
            .then(
                res => {
                    // console.log (res)
                    if (!res.err) {
                        if (res.data.success) {
                             AsyncStorage.setItem('token', res.data.token);
                            return dispatch({
                                type: AUTH_TYPES.AUTH.LOGIN,
                                payload: {
                                    result: res.data.success
                                }
                            })
                        }
                        else {
                            return dispatch({
                                type: AUTH_TYPES.AUTH.LOGIN,
                                payload: {
                                    result: false
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
                                email: ''
                            }
                        })
                    }
                }
            )
    }
}

export const registerFB = (email, fullName,accessTokenFb,accountIdFb) => {
    return async (dispatch) => {
        let loginuser = AuthenticationService.registerFB(email, fullName,accessTokenFb,accountIdFb);
        loginuser
            .then(
                res => {
                    // console.log(res)
                    if (!res.err) {
                        if (res.data.success) {
                            return dispatch({
                                type: AUTH_TYPES.AUTH.LOGIN,
                                payload: {
                                    result: res.data.success
                                }
                            })
                        }
                        else {
                            return dispatch({
                                type: AUTH_TYPES.AUTH.LOGIN,
                                payload: {
                                    result: false
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
                                email: ''
                            }
                        })
                    }
                }
            )
    }
}

export const resetResult = () => {
    return dispatch => {
        dispatch({
            type: EVENT.RESULT,
            payload: {
                result: false
            }
        })
    }
}

export const changeStatusRunning = (status) => {
    return dispatch => {
        dispatch({
            type: EVENT.RUNNING,
            payload: {
                running: status
            }
        })
    }
}

export const getInfo = () => {
    return async (dispatch) => {
        AuthenticationService.getInfo()
            .then(res => {
                if (!res.err) {
                    if (res.data.success) {
                        // console.log (res.data.detail)

                        return dispatch({
                            type: AUTH_TYPES.AUTH.INFO,
                            payload: {
                                info: res.data.detail
                            }
                        })
                    }
                    else {
                        // return dispatch({
                        //     type: AUTH_TYPES.AUTH.VERIFY,
                        //     payload: {
                        //         ...res.data.detail
                        //     }
                        // })
                    }
                }
                else {
                    // localStorage.removeItem('token');
                    return dispatch({
                        type: AUTH_TYPES.AUTH.VERIFY,
                        payload: {
                            result: false
                        }
                    })
                }
            })
    }
}


export const getHistory = (id) => {
    return async (dispatch) => {
        AuthenticationService.getHistory(id)

            .then(res => {
                if (!res.err) {
                    // console.log (res.data.success)
                    if (res.data.success) {
                        return dispatch({
                            type: AUTH_TYPES.AUTH.HISTORY,
                            payload: {
                                history: res.data.detail,
                                runhistory:false

                            }
                        })
                    }
                    //     else {
                    //         // return dispatch({
                    //         //     type: AUTH_TYPES.AUTH.VERIFY,
                    //         //     payload: {
                    //         //         ...res.data.detail
                    //         //     }
                    //         // })
                    //     }
                }
                else {
                    // localStorage.removeItem('token');
                    return dispatch({
                        type: AUTH_TYPES.AUTH.VERIFY,
                        payload: {
                            result: false
                        }
                    })
                }
            })
    }
}
export const register = (email, password, name, urlImage) => {
    return async (dispatch) => {
        let registeruser = AuthenticationService.register(email, password, name, urlImage);
        registeruser
            .then(
                res => {
                    if (!res.err) {
                        if (res.data.success) {
                            return dispatch({
                                type: AUTH_TYPES.AUTH.REGISTER,
                                payload: {
                                    running: false,
                                    result: true
                                }
                            })
                        }
                        else {
                            return dispatch({
                                type: AUTH_TYPES.AUTH.REGISTER,
                                payload: {
                                    running: false,
                                    result: false
                                }
                            });
                        }
                    }
                    else {
                        dispatch({
                            type: AUTH_TYPES.AUTH.REGISTER,
                            payload: {
                                result: false,
                                running: false
                            }
                        })
                    }
                }
            )
    }
}

// export const register = (email, password, name, urlImage) => {
//     return async (dispatch) => {
//         let registeruser = AuthenticationService.register(email, password, name, urlImage);
//         registeruser
//             .then(
//                 res => {
//                     if (!res.err) {
//                         if (res.data.success) {
//                             return dispatch({
//                                 type: AUTH_TYPES.AUTH.REGISTER,
//                                 payload: {
//                                     running: false,
//                                     result: true
//                                 }
//                             })
//                         }
//                         else {
//                             return dispatch({
//                                 type: AUTH_TYPES.AUTH.REGISTER,
//                                 payload: {
//                                     running: false,
//                                     result: false
//                                 }
//                             });
//                         }
//                     }
//                     else {
//                         dispatch({
//                             type: AUTH_TYPES.AUTH.REGISTER,
//                             payload: {
//                                 result: false,
//                                 running: false
//                             }
//                         })
//                     }
//                 }
//             )
//     }
// }

export const logout = () => {
    return (dispatch) => {
        AsyncStorage.removeItem("token");
        return dispatch({
            type: AUTH_TYPES.AUTH.LOGOUT,
            payload: {
                
            }
        })
        // localStorage.removeItem("email");
        return dispatch(authenAction(AUTH_TYPES.AUTH.LOGOUT, null, null, false))
    }
}

export const changeVe =()=>{
    
    return async (dispatch)=>{
        return dispatch({
            type: AUTH_TYPES.AUTH.CHANGEV,
            payload: {
                ve:true
            }
        })
    }
}
export const verify =  () => {

     return async (dispatch) => {
         AuthenticationService.verify()
            .then(res => {
                // console.log (res)
                // console.log(res)
                // console.log(res.err)
                if (!res.err) {
                    if (res.data.success) {
                        return dispatch({
                            type: AUTH_TYPES.AUTH.VERIFY,
                            payload: {
                                ve:true,
                                ...res.data
                            }
                        })
                    }
                    else {
                        
                        // localStorage.removeItem('token');
                        return dispatch({
                            type: AUTH_TYPES.AUTH.VERIFY,
                            payload: {
                                ve:true,
                                ...res.data
                            }
                        })
                    }
                }
                else {
                    // localStorage.removeItem('token');
                    return dispatch({
                        type: AUTH_TYPES.AUTH.VERIFY,
                        payload: {
                            ve:true,
                            result: false
                        }
                    })
                }

            })
        
    }
}


export const getKey =  (email) => {
    return (dispatch) => {
         AuthenticationService.getKey(email)
            .then(res => {
                // console.log(res.data)
                if (!res.err) {
                    if (res.data.result) {
                        return dispatch({
                            type: AUTH_TYPES.GETKEY,
                            payload: {
                                key:true
                            }
                        })
                    }
                    else {
                        
                        return dispatch({
                            type: AUTH_TYPES.GETKEY,
                            payload: {
                                key:false
                            }
                        })
                    }
                }
                else {
                        
                    // localStorage.removeItem('token');
                    return dispatch({
                        type: AUTH_TYPES.AUTH.VERIFY,
                        payload: {
                            result: false
                        }
                    })
                }

            })
        
    }
}
export const changePassword =  (email,pass,key) => {
    return (dispatch) => {
         AuthenticationService.changPassWord(email,pass,key)
            .then(res => {
                // console.log(res.data)
                if (!res.err) {
                    if (res.data.result) {
                        return dispatch({
                            type: AUTH_TYPES.GETKEY,
                            payload: {
                                key:true
                            }
                        })
                    }
                    else {
                        
                        return dispatch({
                            type: AUTH_TYPES.GETKEY,
                            payload: {
                                key:false
                            }
                        })
                    }
                }
                else {
                        
                    // localStorage.removeItem('token');
                    return dispatch({
                        type: AUTH_TYPES.AUTH.VERIFY,
                        payload: {
                            result: false
                        }
                    })
                }

            })
        
    }
}

export const resetToken = () => {
    return authenAction(AUTH_TYPES.LOGIN, null, null, false)
}
