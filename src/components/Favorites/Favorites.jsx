import React, { Component, useRef } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Favorites.css';


function Favorites() {
    const favorites = useSelector(state => state.favorites)
    const [flag, setFlag] = useState(true)
    let inputRef = useRef(null)
    const dispatch = useDispatch()
    function saveFavorites(){
        setFlag(false)
        dispatch({type: 'SAVE_LIST', payload: inputRef.current.value})
    }
    function deleteFavorites(id){
        dispatch({type: 'DELETE_FAVORITES', payload: id})
    }
    return (
        <div className="favorites">
            <input ref={inputRef} className="favorites__name" />
            <ul className="favorites__list">
                {favorites.map((item) => {
                    return (
                    <div className='fav'>
                        <li key={item.imdbID}>{item.Title} ({item.Year})</li>
                        <button onClick={() => deleteFavorites(item.imdbID)}>Delete</button>
                    </div>
                    );
                })}
            </ul>
            {flag ? <button onClick={saveFavorites} type="button" className="favorites__save">Сохранить список</button> : <Link to="/list">GO</Link>}
        </div>
    );
}


export default Favorites;