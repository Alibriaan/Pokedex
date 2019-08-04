import React , {useState}from 'react';
import ReactDOM from 'react-dom';
import { useContext } from "react";
import { observer } from 'mobx-react';
import  {observable , computed , decorate} from 'mobx';


import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

import store from '../store/store';
import PokeCard from './card';

import { HashRouter as Router , Switch , Route , Link } from "react-router-dom";


import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  root: {
backgroundColor: "Gainsboro",	 
	  minHeight: "100vh",
	  display:"flex",
	  justifyContent:"center",
  },
 butt:
{
	width: "100%",
	maxHeight: "80%",
	flexGrow: 1,
	display: "flex",
	justifyContent: "center	",
}
}));




const PokeList = observer((props) => 
{
		const localStore = useContext(store)
	  const classes = useStyles();

	
	  return (
	 
		 <Grid container className={classes.root}>
		   <Grid  >
        <Grid container justify="center"  >
		 {localStore.pokemons.map( item => (
		  <PokeCard color={item.type} pok={item} lin={"/pokemon/" + item.id} number={item.id} name={item.name} types={item.types} ava={item.sprites.front_default}/>
	  			))}



<Grid container justify="center"  >
<Box className={classes.butt} mt={2} mb={4}>
 <Button id="ButtonNext"variant="contained" color="secondary"  onClick={ () => ( setTimeout(localStore.NextPage , 0))} >
	Load next
      </Button>
	</Box>
</Grid>
		
</Grid>
	      </Grid>
</Grid>
      
	  );

})


/*
<Link to ={"/pokemon/" + item.id} style={{textDecoration : 'none'}} onClick= { () => localStore.CurrentPokemon(item) }>
  </Link>

*/
/*
{localStore.pokemons.map(item => 
		  (
           <div> 
		  <h3>{item.id}</h3> 
		  <h3>{item.name}</h3> 
		  </div>
          ))};
*/
export default PokeList ;