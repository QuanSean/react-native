import axios from 'axios'
import {URL} from './../common/connection'
export const promiseProvider = async (sourceUrl, option) => {
    console.log(sourceUrl, option)
    try {
        option = option || {}
        // const token = await AsyncStorage.getItem(FILE_USER_TOKEN)
        console.log(localStorage.getItem('token'))
        const header = {
            token: localStorage.getItem('token'),
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

