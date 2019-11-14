import React from 'react'

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
                onChange= {handleChange}
            />
            <input 
                name= 'username'
                type ='text'
                value = {user.username}
                onChange= {handleChange}
            />

            <input 
                name= 'password'
                type ='password'
                value = {user.password}
                onChange= {handleChange}
            />

        </form>
    )
}

export default Register
