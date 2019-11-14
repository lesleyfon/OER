import React, {useState}from 'react';
import api from './../../utils/api'
function Register() {
    const [user, setUser] = useState({
        name:'',
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
        api().post('/api/auth/register', user)
            .then(res=> { 
                console.log(res)
            })
            .catch(err=> {
                console.log(err)
            })
    } 

    return (
        <form onSubmit={handleSubmit}>

             <input 
                name= 'name'
                type ='text'
                value = {user.name}
                placeholder='Name'
                onChange= {handleChange}
                />
            <input 
                name= 'username'
                type ='text'
                placeholder='UserName'
                value = {user.username}
                onChange= {handleChange}
                />

            <input 
                name= 'password'
                type ='password'
                placeholder='Password'
                value = {user.password}
                onChange= {handleChange}
            />
            <button>Submit</button>
        </form>
    )
}

export default Register
