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
export const statusArrCart=(status)=>{
    return dispatch => {
        dispatch({
            type: BOOK_TYPES.CHANGESTATUSARRCART,
            payload: {
                statusArrCart:status
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


export const info= (idBook)=>{
    return async (dispatch)=>{
        let info=BookService.info(idBook)
        info
        .then(
            res=>{
                
                if (!res.err)
                {
                    if (res.data.success)
                    {
                        return dispatch({
                            type: BOOK_TYPES.INFOBOOK,
                            payload: {
                                info:res.data.detail
                            }
                        })
                    }
                    else{
                        return dispatch({
                            type: BOOK_TYPES.INFOBOOK,
                            payload: {
                                info:{}
                            }
                        })
                    }
                }
                else
                {
                    return dispatch({
                        type: BOOK_TYPES.INFOBOOK,
                        payload: {
                            info:{}
                        }
                    })
                }
            }
        )        
    }
}

export const addItemCart= (idBook)=>{
    return async (dispatch)=>{
        let info=BookService.info(idBook)
        info
        .then(
            res=>{
                if (!res.err)
                {
                    if (res.data.success)
                    {

                        return dispatch({
                            type: BOOK_TYPES.ARRCART,
                            payload: {
                                item:res.data.detail
                            }
                        })
                    }
                    else{
                        // return dispatch({
                        //     type: BOOK_TYPES.ARRCART,
                        //     payload: {
                        //         item:{}
                        //     }
                        // })
                    }
                }
                else
                {
                    // return dispatch({
                    //     type: BOOK_TYPES.ARRCART,
                    //     payload: {
                    //         item:{}
                    //     }
                    // })
                }
            }
        )        
    }
}