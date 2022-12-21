import React from 'react';
import { Route, Routes, Switch, Router } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import ListPage from './pages/ListPage/ListPage';

import './reset.css';
import './common.css';

function App() {
  return (
    <div className="app">
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/list">
            <ListPage />
          </Route>
        </Switch>
    </div>
  );
}


export default App;
