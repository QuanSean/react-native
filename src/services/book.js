import { FETCH_TYPES } from './types'
import { FETCH, MAKE_FROM_BODY, promiseProvider } from './fetch';
import { async } from 'q';

export const bookService={
    getAllBook: async()=>{
        try {
            let res = await promiseProvider('book/createbook', {
              method: 'POST',
              
            })
            return ({
              err: false,
              data: res.data
      
            })
            // return res.data
          } catch (error) {
            return ({
              err: true,
            })
          }
    }
}