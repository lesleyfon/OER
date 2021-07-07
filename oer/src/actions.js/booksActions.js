
import api from './../utils/api';
import { FETCHING_BOOK_DATA ,FETCHING_BOOK_SUCCESS , FETCHING_BOOK_ERROR } from './../reducer/allBooks'
export const fetchBooks = () =>{
    
    return (dispatch) => {
        dispatch({ type: FETCHING_BOOK_DATA })
        api().get('/api/books')
            .then(res => {
                dispatch({ type: FETCHING_BOOK_SUCCESS, payload : res.data })
            }).catch( err=> {
                console.log(err.response)
                dispatch({type: FETCHING_BOOK_ERROR, payload: 'Errorrrrr'})
            })
    }
}