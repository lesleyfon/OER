import React, {useState} from 'react'

function Login() {
    const [user, setUser] = useState({
        name:'',
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
                onChange= {handleChange}
            />
            <input 
                name= 'password'
                type ='passworx'
                value = {user.password}
                onChange= {handleChange}
            />

        </form>
    )
}

export default Login
