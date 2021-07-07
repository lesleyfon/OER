import React, { useState }from 'react';
import styled from 'styled-components'
import Login from './Login';
import Register from './Register';

function RenderLoginRegister(props) {
    const [ signup, setSignUp ] = useState('login');
    return (
        <Styles >
            <div className='wrapper'>
                <header className='loginHeader'>
                    { (signup === 'login') ? <h1>Login</h1> : <h1>SignUp</h1> }
                </header>
                {
                    (signup === 'login') ?
                <Login {...props}/> :
                <Register {...props}/>
                }
                <h4>Not Registered, 
                    <span className ='bottom'
                        onClick={ () =>{   
                        setSignUp('signup')
                    }}> Create an account
                    </span>
                </h4>
                <h4>
                    <span
                        className ='bottom'
                        onClick={ () =>{   
                        setSignUp('login')
                    }}>
                        login
                    </span>
                </h4>
            </div>
        </Styles>
    )
}

export default RenderLoginRegister

const Styles = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 100%;
    height: 100vh;
    .wrapper{
        width: 500px;
        height: 500px;
        background: lightgrey;
        border-radius: 5px;
        box-shadow: 0 1px 6px 0 rgba(32,33,36,0.28);
        background: #ffffff;
        align-self: center;
    }
    form{
        width: 100%;
        display: flex;
        flex-direction: column;
        margin: 30px auto;
    }
    form input{
        width: 90%;
        margin: 10px 10px;
        height: 35px;
        padding-left: 10px;
        font-size: .8rem;
    }
   button{
    background-color: white;
    font: 400 11px system-ui;
    padding: 1px;
    border-style: inset;
    border-color: initial;
    width: 90%;
    margin: 10px 10px;
    height: 35px;
   }
    .loginHeader, h1{
        text-align: center;
        font-weight: bolder;
        font-size: 3rem;
    }
    .bottom{
        bottom: 0px;
        align-self: 'flex-end';
        cursor: pointer;
        text-decoration: underline;
    }
    h4{
        text-align: center;
        font-weight: bolder;
        font-size: 1rem;
    }
    h4 span{
        color: darkgray;
    }
    `;