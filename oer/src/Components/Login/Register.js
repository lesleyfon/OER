import React, {useState}from 'react'

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
    return (
        <form>

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

        </form>
    )
}

export default Register
