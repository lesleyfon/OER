import axios from 'axios'

export const  URL = 'https://oer-bookr.herokuapp.com'
export default function() {
    return axios.create({
        baseURL: URL,
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
}