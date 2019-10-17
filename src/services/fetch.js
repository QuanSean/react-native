import { URL } from "../common/connection";
import axios from 'axios'
import {AsyncStorage} from 'react-native';

export const MAKE_FROM_BODY = (body) => {
  let formBody = [];
  for (let property in body) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(body[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");
  return formBody;
}

export const FETCH = (method, extURL, formBody) => {
    var token='';
    AsyncStorage.getItem('token',(err, value)=>{
        if (value)
        {
           token=value
        //    console.log("fetch"+token)
        }
    } );
    // console.log("token: "+token)
  return formBody ?
    fetch(URL.SERVER.DEV + extURL, {
      method: method,
      headers: {
        // 'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Type': 'application/json',
        'token': token
      },
      body: formBody
    }) :
    fetch(URL.SERVER.DEV + extURL, {
      method: method,
      headers: {
        // 'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Type': 'application/json',
        'token': token
      }
    })
}
// var token=''
// AsyncStorage.getItem('token',(err, value)=>{
//     if (value)
//     {
//         token=value
//     }
// } );


export const promiseProvider = async (sourceUrl, option) => {
  try {
    // var token='';
    // console.log (this.getToken())
        var token = await AsyncStorage.getItem('token');
        console.log ("token axios: "+token)
        


      option = option || {}
      // const token = await AsyncStorage.getItem(FILE_USER_TOKEN)
      const header = {
          token: token,
          'content-type': 'application/json; charset=utf-8',
      }
      // const header = {}
      const method = option.method || 'GET'
      const options = {
          headers: header,
      }
      let filter = ''
      const BASE_API_URL=URL.SERVER.DEV
      if (option.filter) {
          filter = '?filter=' + JSON.stringify(option.filter)
      }
      if (option.params) {
          options.params = option.params
      }

      if (method == 'GET') {
          // return axios.get(BASE_API_URL + sourceUrl + filter, options)
          return new Promise((resolve, reject) => {
              axios
                  .get(BASE_API_URL + sourceUrl + filter, options)
                  .then(response => {
                      resolve(response)
                  })
                  .catch(err => {
                      if (err.response) {
                          reject(err.response)
                      } else {
                          reject({ status: 404 })
                      }
                  })
          })
      } else {
          const data = option.data || {}
          // return  axios.post(BASE_API_URL + sourceUrl, { ...data }, { headers: header })
          return new Promise((resolve, reject) => {
              axios
                  .post(BASE_API_URL + sourceUrl, { ...data }, { headers: header })
                  .then(response => {
                      resolve(response)
                  })
                  .catch(err => {
                      if (err.response) {
                          reject(err.response)
                      } else {
                          reject({ status: 404 })
                      }
                  })
          })
      }
  } catch (err) {
      // console.log('Error:', err)
  }
}