import React from 'react';
import ReactDOM from 'react-dom';
//import Header from './components/header';
//import SearchAppBar from './components/header';


import Header from './header';
import SimpleCard from './card';
import  PokeList  from './pokemonlist';
import Footer from './footer';


import { useContext } from "react";
import { observer } from 'mobx-react';
import  {observable , computed , decorate} from 'mobx';

import store from '../store/store';
import Button from '@material-ui/core/Button';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Box from '@material-ui/core/Box';



const useStyles = makeStyles(theme => ({
 root:
{
minHeight: "100vh",	
border: "1px solid blue"
}
}));



const App = observer( () => {
	
	
	const classes = useStyles();

	const localStore = useContext(store)
  return ( 
	  <div>
		<Header  disable={false}/>

 		<PokeList />
	 
	  	<Footer />
	</div>
  )
})

export default App;