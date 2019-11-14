import React, {useEffect}from 'react';
import {connect} from 'react-redux'
import NavBar from './Header/NavBar'
import { fetchBooks } from './../actions.js/booksActions'

function Home(props) {
    
    useEffect(() => {
        props.fetchBooks()
    }, [])
    return (
        <div>
            <NavBar />
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
