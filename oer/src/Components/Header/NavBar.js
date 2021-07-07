import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function NavBar(props) {
    const [search, setSearch] = useState('')
    const logOut = e => {
        e.preventDefault();
        localStorage.removeItem('token');
        props.history.push('/')
    }
    const handleSearch = e => {
        setSearch(e.target.value)
    }
    return (
        <NavBarStyled>
            <nav>
                <ul>
                    <li> <Link to='/home'>Home</Link></li>
                    <li><Link to='/saved'>Saved books</Link></li>
                    <li><Link to='/recent'>Recently Viewed</Link></li>
                </ul>
            </nav>

            <div className='right-container'>
                <input 
                    placeholder='Search'
                    name= 'search'
                    value= {search}
                    onChange={handleSearch}
                />
                <button onClick= {logOut}>LogOut</button>
            </div>
        </NavBarStyled>
    )
}

export default NavBar

const NavBarStyled = styled.div`
    width: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    height: 57px;
    background-color: #fc4503;
    display: flex;
    justify-content: space-between;
    align-content: center;
    nav ul{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        width: 400px;
        margin: 0px;
    }
    nav ul li{
        list-style-type: none;
        padding: 10px 20px;
        font-weight: bolder;
        border-radius: 10px;
        a{
            text-decoration: none;
            color: #000000
        }
    }
    nav ul li:hover{
        background-color: #FAFBDB;
        transition-duration: .9s;
    }

    .right-container{
        justify-content: space-evenly;
        display: flex;
        align-content: center;
        padding-right: 10px;
        width: 300px;
    }
    .right-container input{
        font-size: 1rem;
        padding-left: 10px;
        outline:none;

    }
    .right-container button{

        padding: 10px 20px;
        font-size: 1rem;
        font-weight: 132px;
        height: 75%;
        align-self: center;
        text-align: center;
        background: #FAFBDB;
        border-radius: 10px;
        outline:none;

    }
`;