const initialState = {
    fetching : false,
    books : [],
    error : ''
}
export const FETCHING_BOOK_DATA = 'FETCHING_BOOK_DATA'
export const FETCHING_BOOK_SUCCESS = 'FETCHING_BOOK_SUCCESS'
export const FETCHING_BOOK_ERROR = 'FETCHING_BOOK_ERROR'

export function reducer (state = initialState, action) {
    switch(action.type){
        case FETCHING_BOOK_DATA:
            return {
                ...state,
                fetching: true
            }
        case FETCHING_BOOK_SUCCESS:
            return {
                ...state,
                fetching: false,
                books : action.payload
            }
        case FETCHING_BOOK_ERROR:
            return {
                ...state,
                fetching: false,
                error : action.payload
            }
        default:
            return state
    }
}