import React, {useEffect}from 'react';
import { Route } from 'react-router-dom';
import {connect} from 'react-redux'
import styled from 'styled-components';
import NavBar from './Header/NavBar'
import { fetchBooks } from './../actions.js/booksActions'
import jumbotron from './jumbotron.jpeg'
function Home(props) {
    
    useEffect(() => {
        props.fetchBooks()
    }, [])
    return (
        <div>
            <Route
                path ='/'
                component= {NavBar}
            />
           <ImageDiv>
               <img src= {jumbotron}/>
           </ImageDiv>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
        books : state.books
    }
}


export default connect(mapStateToProps, {fetchBooks})(Home)

const ImageDiv = styled.div`
    width: 100%;
    height: 500px;
    img{
        width: 100%;
        height: 100%
    }
`