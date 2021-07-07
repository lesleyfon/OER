import React, {useState} from 'react';
import api from './../../utils/api'

function Login(props) {
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
        api().post('/api/auth/login', user)
            .then(res=> { 
                localStorage.setItem('token', res.data.token)
                console.log(props)
                props.history.push('/home')
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
                placeholder = 'UserName'
                onChange= {handleChange}
            />
            <input 
                name= 'password'
                type='password'
                placeholder = 'Password'
                value = {user.password}
                onChange= {handleChange}
            />
            <button>Submit</button>
        </form>
    )
}

export default Login
