import axios from 'axios'

export default function() {
    return axios.create({
        baseURL: 'https://oer-bookr.herokuapp.com',
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
}