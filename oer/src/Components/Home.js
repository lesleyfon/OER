import React, {useEffect}from 'react';
import { Route } from 'react-router-dom';
import {connect} from 'react-redux'
import NavBar from './Header/NavBar'
import { fetchBooks } from './../actions.js/booksActions'

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
            welcom Home  test
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
