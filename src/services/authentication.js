import { FETCH_TYPES } from './types'
import { FETCH, MAKE_FROM_BODY,promiseProvider } from './fetch';
import { async } from 'q';

export const AuthenticationService = {
  // login: (email, password) => {
  //   // let formBody = MAKE_FROM_BODY({email, password});
  //   let formBody = JSON.stringify({email, password});
  //   console.log (FETCH(FETCH_TYPES.POST, "account/login", formBody))
  //   return FETCH(FETCH_TYPES.POST, "account/login", formBody);
  // },
  login: async(email, password)=>{
      let data={
        email:email,
        password:password
      }
      try {
          let res = await promiseProvider('account/login', {
              method: 'POST',
              data,
          })
          return ({
            err:false,
            data:res.data
            
          })
          // return res.data
      } catch (error) {
          return({
            err:true,
          })
      }

  },
  // register: (email, password, fullName,urlImage) => {
  //   // let formBody = MAKE_FROM_BODY({email, password, fullName});
  //   let formBody = JSON.stringify({email, password, fullName,urlImage});

  //   return FETCH(FETCH_TYPES.POST, "account/register", formBody);
  // },
  register: async(email, password, fullName,urlImage) => {
    let data={
      email:email,
      password:password,
      fullName,
      urlImage
    }
    try {
        let res = await promiseProvider('account/register', {
            method: 'POST',
            data,
        })
        return ({
          err:false,
          data:res.data
          
        })
        // return res.data
    } catch (error) {
        return({
          err:true,
        })
    } 
  },


  logout: () => {
    let formBody = MAKE_FROM_BODY({});
    return FETCH(FETCH_TYPES.POST, "account/logout", formBody);
  },
  // verify: () => {
  //   let formBody = MAKE_FROM_BODY({});
  //   return FETCH(FETCH_TYPES.POST, "account/verify", formBody);
  // }
  getInfo:async()=>{
    try {
      let res = await promiseProvider('account/info', {
          method: 'GET'
      })
      return ({
        err:false,
        data:res.data
        
      })
        // return res.data
    } catch (error) {
        return({
          err:true,
        })
    } 
  },
  getHistory:async(idUser)=>{
    let data={
      id:idUser,
    }    
    try {
      let res = await promiseProvider('account/history', {
          method: 'POST',
          data
      })
      return ({
        err:false,
        data:res.data
        
      })
      // return res.data
  } catch (error) {
      return({
        err:true,
      })
  } 
  },
  verify:async()=>{
    try {
      let res = await promiseProvider('account/verify', {
          method: 'POST'
      })
      return ({
        err:false,
        data:res.data
        
      })
      // return res.data
  } catch (error) {
      return({
        err:true,
      })
  } 
  }

}
