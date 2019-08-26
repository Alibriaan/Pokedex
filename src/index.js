import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
//import Header  from './components/header';

//import { observable } from "mobx";
//import { observer } from 'mobx-react';

//import Header from './components/header';
import App from './components/app';
import CurrentPokemon from './components/pokemon';
import Error from './components/error';

//import store from './store/store';
import { HashRouter as Router , Switch , Route  } from "react-router-dom";
//import Footer from './components/footer';
import About from './components/about';

ReactDOM.render(
	<Router>
<Switch >
<Route path = "/" exact component = {App}/> 
<Route path = "/about" component = {About}/>
<Route path = "/pokemon" exact render={()=><Error error_type="POKEMON NOT SELECTED"/>}/>
<Route path = "/:labuda" exact render={()=><Error error_type="INVAILD URL"/>}/>
<Route path = "/pokemon/:id"  exact component = {CurrentPokemon}/>
<Route path = "/:labuda/:labuda2/"  render={()=><Error error_type="INVAILD URL"/>}/>
<Route path = "/:labuda/:labuda2/:labuda3"  exact render={()=><Error error_type="INVAILD URL"/>}/>
</Switch> 
</Router>
	, document.getElementById('root'));



//ReactDOM.render(<Header />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


