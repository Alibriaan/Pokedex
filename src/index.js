import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
//import Header  from './components/header';

import { observable } from "mobx";
import { observer } from 'mobx-react';

import Header from './components/header';
import App from './components/app';
import CurrentPokemon from './components/pokemon';
import Error from './components/error';

import store from './store/store';
import { HashRouter as Router , Switch , Route , Link } from "react-router-dom";
import Footer from './components/footer';

ReactDOM.render(
	<Router>
<Switch >
<Route path = "/" exact component = {App}/> 
<Route path = "/about" component = {Footer}/>
<Route path = "/pokemon" exact render={(props)=><Error error_type="POKEMON NOT SELECTED"/>}/>
<Route path = "/:labuda" exact render={(props)=><Error error_type="INVAILD URL"/>}/>
<Route path = "/pokemon/:id"  exact component = {CurrentPokemon}/>
<Route path = "/:labuda/:labuda2/"  render={(props)=><Error error_type="INVAILD URL"/>}/>
<Route path = "/:labuda/:labuda2/:labuda3"  exact render={(props)=><Error error_type="INVAILD URL"/>}/>
</Switch> 
</Router>
	, document.getElementById('root'));



//ReactDOM.render(<Header />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();




// fetch pokemon api 
/*
let pokemon;
   fetch("https://pokeapi.co/api/v2/pokemon/1/").then(results => { return results.json();
    }).then(data => {
        console.log(data);
	   pokemon = data;
	   console.log(pokemon);
    })
	
*/


// роутинг пример
 /*
ReactDOM.render(
<Router>
<div className = "App">
<Switch >
<Route path = "/" exact component = {pok_list}/> 
<Route path = "/about" component = {about}/> 
<Route path = "/pokemon/:id" component = {pok}/>
</Switch> </div> 
</Router>,
  document.getElementById('root')
);

*/