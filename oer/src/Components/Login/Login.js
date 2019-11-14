import React, {useState} from 'react';
import api from './../../utils/api'

function Login() {
    const [user, setUser] = useState({
        username:'',
        password:''
    })

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    } 
    const handleSubmit = e => {
        e.preventDefault();
        console.log(user)
        api().post('/api/auth/login', user)
            .then(res=> { 
                localStorage.setItem('token', res.data.token)
            })
            .catch(err=> {
                console.log(err)
            })
    } 

    return (
        <form onSubmit={handleSubmit}>
            <input 
                name= 'username'
                type ='text'
                value = {user.username}
                onChange= {handleChange}
            />
            <input 
                name= 'password'
                type ='passworx'
                value = {user.password}
                onChange= {handleChange}
            />
            <button>Submit</button>
        </form>
    )
}

export default Login
