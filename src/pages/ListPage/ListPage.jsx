import React, { Component } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import './ListPage.css';

function ListPage() {
    const favorites = useSelector(state => state.favorites)
    const title = useSelector(state => state.title)
    // TODO: запрос к сервер на получение списка
    // TODO: запросы к серверу по всем imdbID

    return (
        <div className="list-page">
            <h1 className="list-page__title">{title}</h1>
            <ul>
                {favorites.map((item) => {
                    return (
                        <li key={item.imdbID}>
                            <a href={`https://www.imdb.com/title/${item.imdbID}/`} target="_blank">{item.Title} ({item.Year})</a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}


export default ListPage;