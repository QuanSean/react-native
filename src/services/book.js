import { promiseProvider } from './fetch';
import { async } from 'q';

export const BookService={
    getAllBook: async()=>{
        try {
            let res = await promiseProvider('book/getall', {
              method: 'GET',
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
    },
    info:async(id)=>{
      let data={
        idBook:id
      }
      
      try {
        let res = await promiseProvider('book/info', {
          method: 'POST',
          data,
        })
        // console.log(res)
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