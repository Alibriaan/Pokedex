/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import App from './components/app'
import CurrentPokemon from './components/pokemon'
import Error from './components/error'
import { HashRouter, Switch, Route } from 'react-router-dom'
import About from './components/about'

ReactDOM.render(
  <HashRouter>
    <Switch >
      <Route path = "/" exact component = {App}/>
      <Route path = "/about" component = {About}/>
      <Route path = "/pokemon" exact render={() => <Error error_type="POKEMON NOT SELECTED"/>}/>
      <Route path = "/:labuda" exact render={() => <Error error_type="INVAILD URL"/>}/>
      <Route path = "/pokemon/:id" exact component = {CurrentPokemon}/>
      <Route path = "/:labuda/:labuda2/" render={() => <Error error_type="INVAILD URL"/>}/>
      <Route path = "/:labuda/:labuda2/:labuda3" exact render={() => <Error error_type="INVAILD URL"/>}/>
    </Switch>
  </HashRouter>, document.getElementById('root'))
serviceWorker.unregister()
