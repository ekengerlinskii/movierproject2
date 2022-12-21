const initialState = {
    title: 'Новый список',
    favorites: [],
    movies: []
}

export function fetcher(ev){
    return function(dispatch){
        fetch(`http://www.omdbapi.com/?s=${ev}&apikey=9436cee1`)
        .then(res => res.json())
        .then((data) => {
             dispatch({type: 'SEARCH', payload: data.Search})
        })
    }
}

function reducer(state = initialState, action){
    switch(action.type){
        case 'ADD_FAVORITES':
            let obj = state.movies.find((item) => item.imdbID === action.payload)
            let newArr
            if(state.favorites.includes(obj)){
                newArr = [...state.favorites]
            }
            else{
                newArr = [...state.favorites, obj]
            }
            return {...state, favorites: newArr}
        case 'DELETE_FAVORITES':
            return {...state, favorites: state.favorites.filter((item) => item.imdbID !== action.payload)}
        case 'SEARCH':
            return {...state, movies: action.payload}
        case 'SAVE_LIST':
            return {...state, title: action.payload}
        default:
            return {...state}
    }
}

export default reducer