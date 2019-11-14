import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function NavBar(props) {

    const logOut = e => {
        e.preventDefault();
        localStorage.removeItem('token');
        props.history.push('/')
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

            <div>
                <input />
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
`;