import React , {useState} from 'react';
//import ReactDOM from 'react-dom';


import { observer } from 'mobx-react';
//import  {observable , computed , decorate} from 'mobx';
import store from '../store/store';
import { useContext } from "react";


import Header from './header';
import Error from './error';
import Footer from './footer';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
//import CardActionArea from '@material-ui/core/CardActionArea';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//import Avatar from '@material-ui/core/Avatar';

/*
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
*/

//import { spacing } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import { Zoom } from '@material-ui/core';
//import { object } from 'prop-types';
//import { object } from 'prop-types';

//import CircularProgress from '@material-ui/core/CircularProgress';
//import LinearProgress from '@material-ui/core/LinearProgress';

	
const useStyles = makeStyles( theme => ({
  root:
	{
		minHeight: "100vh",
		
		display:"flex",
		flexDirection: "column",
		alignItems: "center", 
		justifyContent:"space-around",
	},
	
	card: {

		width: "90vw",
		maxWidth: "1600px",
	 display:"flex",
     justifyContent:"center", 
  },
	content:{
		
		flexGrow: 1,
		padding: 0,
		paddingBottom: "0px", 
	},
  number: {
	  display: "flex",
	  justifyContent: "center",
  },
  

	name:{
		flexGrow: 1,
		textAlign: "center",
		display:"flex",
		justifyContent: "center"
	},
	avatar:{
		display:"flex",
		justifyContent: "center"

	},
	avatarSize:{
		 width: 150,
		 height: 150,
		display:"flex",
		justifyContent: "center",
		alignItems:"center",
		
		[theme.breakpoints.up('md')]: {
			width: 300,
			height: 300,
		},

	},
	types:
	{
		display:"flex",
		justifyContent: "center",
	},
	media:
	{
		display:"flex",
		justifyContent:"center",
	},
	rootError:
	{
		display:"flex",
		height: "100vh",
	},
	typesName:
	{
		display: "block",
		padding: "3px",
		width: "100px",
		textAlign:"center ",
		boxShadow: " 0px 0px 10px 0.5px rgba(0,0,0,0.2)"
	},
	story:
	{
		textAlign: "center",
	},
	skils:{
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	statsBarRoot:
	{
		display: "flex",
		justifyContent: "space-around",
		alignItems: "center",
	},

	statsBarName:{
	
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-around",
	},

	paper:{
		padding: "2.5px 0px 2.5px 0px",
	},
	bar:
	{
	display: "flex",
		justifyContent: "space-between",
	},
	cardFooter:
	{
		height: 104,
	}
}));

const colors = {
  bug: 'B1C12E',
  dark: '4F3A2D',
  dragon: '755EDF',
  electric: 'FCBC17',
  fairy: 'F4B1F4',
  fighting: '823551D',
  fire: 'E73B0C',
  flying: 'A3B3F7',
  ghost: '6060B2',
  grass: '74C236',
  ground: 'D3B357',
  ice: 'A3E7FD',
  normal: 'C8C4BC',
  poison: '934594',
  psychic: 'ED4882',
  rock: 'B9A156',
  steel: 'B5B5C3',
  water: '3295F6'
};




const CurrentPokemon = observer((props) => 
{
	const localStore = useContext(store)
	const classes = useStyles()
	const [checked] = useState(true);





	    var fight = (prop) =>
		{
			if(prop === "fighting")
			{
				return "DimGray";
			}
			else
			{
				return "white";
			}
		}
	
		var bgcolor = (prop) =>
		{

			var first ,second;
			if( prop.types.length > 1)
				{

					first = prop.types[0].type.name === "fighting" ? "C0C0C0" : colors[ prop.types[0].type.name];
					second =prop.types[1].type.name === "fighting" ? "C0C0C0": colors[ prop.types[1].type.name];
					return  "linear-gradient( to right , #" +  first  + " 50% ,  #" +  second +" 50%)";
				}

				else
				{
					first = prop.types[0].type.name === "fighting" ? "C0C0C0" : colors[ prop.types[0].type.name];
					return  "#" + first;
				}
		}
		
		
		var text = () =>
		{
			var check = false;

			var tex = "Hello";
		
		    localStore.species.flavor_text_entries.filter( (item) => {
				if(check === false && item.language.name === "en")
				{
					tex = item.flavor_text;
					check = true;
					return true;
				}
				else
				{
					return false;
				}

			});
			return tex;
		}


		var generation = () =>
		{
			var generation , number;
			var index = localStore.species.generation.name.indexOf("-");

			generation = localStore.species.generation.name[0].toUpperCase() + localStore.species.generation.name.slice(1 , index);
				number = localStore.species.generation.name.slice(index+1);
				number = number.toUpperCase();

			return generation + "-" + number;
		}

	
		

			  
	if( localStore.pokemon === undefined)
		{
			 	fetch("https://pokeapi.co/api/v2/pokemon/"+props.match.params.id).then(results => { return results.json().then(data => {
					if(results.ok)
						{
										  localStore.CurrentPokemonPage(props.match.params.id); 
						}
					else
						{
							return Promise.reject({status: results.status, data});
						}
		 })
			  .catch(error => { console.log('error:', error);
							   localStore.pokemon = results.status});


		 });
		}
	else if(!isNaN(+localStore.pokemon))
	{
			return(<Error error_type={localStore.pokemon}/>);
	}
	else
		{

			// Нижнее условие фиксит то что карточка может не зарендерится на страницу
	  return (

		 (localStore.pokemon !== undefined ) && (localStore.species !== undefined ) &&
		<Box  className={classes.main}>
		<Header disable={true}/>
	   <Zoom in={checked} timeout={{ enter: 400}}>   
		 <Box  className={classes.root} mt={2} mb={2} mr={2} ml={2}>
		   <Card className={classes.card} >
		     <CardContent className={classes.content}>
		  
		  <Box  pt={1} pb={1}style={{background: bgcolor(localStore.pokemon) , color: "White" }}>
		  <Typography className={classes.number}   variant="h4">
		  №{localStore.pokemon.id} 
		  </Typography>
		  <Typography variant="h3"  className={classes.name}  >
		  {localStore.pokemon.name} 
		  </Typography >
				   </Box>
		    
				   <Typography className={classes.avatar}>
		  <CardMedia className={classes.avatarSize} image={localStore.pokemon.sprites.front_default} title={localStore.pokemon.name} />
		   </Typography>
		    
		 <Typography className={classes.types}   variant="h5">
		  	{localStore.pokemon.types.map((item) => (
	  		<Box ml={1} mr={1} style={{backgroundColor : "#" + colors[item.type.name] , color: fight(item.type.name) }} className={classes.typesName}>{item.type.name}</Box>
		  
	  		))}
		  </Typography>

			<Typography variant="h5" >
				<Box mt={3} mb={3} ml={2} mr={2}>
			 <span className = "count">{generation()}</span>
				</Box>
			</Typography>


		 
			<Box mt={3} mb={1} ml={2} mr={6}>
		   <Typography  variant="h4">
		   <span className = "count">{localStore.species.genera[2].genus}</span>
		   <Typography  variant="h6">
		   <span className = "count">{text()}</span>	
		   </Typography>
		   </Typography>		
				</Box>



				<Box  pt={1} pb={1} mt={1} mb={1} style={{background: bgcolor(localStore.pokemon) , color: "White" }}>
		  <Typography className={classes.number}   variant="h4">
				Stats
		  </Typography >
		</Box>

		

		  <Box className = {classes.skils} pt={6} pb={6}>

			  <Typography variant="h6">
			  <span>HP:</span> <span className = "count">{localStore.pokemon.stats[5].base_stat}</span>
			  </Typography>
			  <Typography variant="h6">
			  <div><span>Attack:</span> <span className = "count">{localStore.pokemon.stats[4].base_stat}</span></div>
			  </Typography>
			  <Typography variant="h6">
			  <div><span>Speed:</span> <span className = "count">{localStore.pokemon.stats[0].base_stat}</span></div>
			  </Typography>
			  <Typography variant="h6">
			  <div><span>Defense:</span> <span className = "count">{localStore.pokemon.stats[3].base_stat}</span></div>
			  </Typography>
			  <Typography variant="h6">
			  <div><span>Sp Atk:</span> <span className = "count">{localStore.pokemon.stats[2].base_stat}</span></div>
			  </Typography>
			  <Typography variant="h6">
			  <div><span>Sp Def:</span> <span className = "count">{localStore.pokemon.stats[1].base_stat}</span></div>
			  </Typography>
			</Box>

			  <Box  pt={1} pb={1} mt={1} mb={6} style={{background: bgcolor(localStore.pokemon) , color: "White" }}>
		  <Typography className={classes.number}   variant="h4">
				Informations
		  </Typography >

		</Box>

		<Box mt={3} mb={3} ml={2} mr={6}>
			
		<Typography  variant="h6" >
		  <span>Base Happiness:</span> <span className = "count">{localStore.species.base_happiness}</span>

		   </Typography>	

		   <Typography  variant="h6">
		   <span>Egg groups:</span> <span className = "count">{localStore.species.egg_groups.map( (item) => ( item.name + " "  )) }</span>
		   </Typography>

		   <Typography  variant="h6">
		   <span>Height:</span> <span className = "count">{localStore.pokemon.height}</span>
		   </Typography>
			
		   <Typography  variant="h6">
		   <span>Weigth:</span> <span className = "count">{localStore.pokemon.weight}</span>
		   </Typography>
			
		   <Typography  variant="h6">
		   <span>Gender rate:</span> <span className = "count">{localStore.species.gender_rate}</span>
		   </Typography>
			

		   <Typography  variant="h6">
		   <span>Capture rate:</span> <span className = "count">{localStore.species.capture_rate}</span>
		   </Typography>
			

		</Box> 

      	</CardContent>
</Card>
</Box>
</Zoom>							

		<Footer />				
	</Box>	
			  					
	  );
}});


//		   <span className = "count">{localStore.species.flavor_text_entries[1].flavor_text}</span>	
//			<div><span>generation:</span> <span className = "count">{localStore.species.generation.name}</span></div>


export default CurrentPokemon;

/*

	<Box mt={3} mb={3} ml={2} mr={2}>



 <Grid direction="column"container spacing={2}>

			<Grid container   item   className={classes.bar}>
				<Typography>HP:</Typography>
			<Grid item xs={6}>
          <Paper className={classes.paper}>{localStore.pokemon.stats[5].base_stat}</Paper>
        </Grid>
        </Grid>
		
		<Grid  item container  className={classes.bar}>
		<Typography>Attack:</Typography>
			<Grid item xs={6}>
          <Paper className={classes.paper}>{localStore.pokemon.stats[4].base_stat}</Paper>
        </Grid>
        </Grid>

		<Grid item container  className={classes.bar}>
		<Typography>Speed:</Typography>
			<Grid item xs={6}>
          <Paper className={classes.paper}>{localStore.pokemon.stats[0].base_stat}</Paper>
        </Grid>
        </Grid>
		
		<Grid  item container  className={classes.bar}>
		<Typography>Defense:</Typography>
			<Grid item xs={6}>
          <Paper className={classes.paper}>{localStore.pokemon.stats[3].base_stat}</Paper>
        </Grid>
        </Grid>

		<Grid item container  className={classes.bar}>
		<Typography>Sp Atk:</Typography>

			<Grid item xs={6}>
          <Paper className={classes.paper}>{localStore.pokemon.stats[2].base_stat}</Paper>
        </Grid>
        </Grid>
		
		<Grid  item container  className={classes.bar}>
		<Typography>Sp Def:</Typography>
			<Grid item xs={6} >
          <Paper className={classes.paper}>{localStore.pokemon.stats[1].base_stat}</Paper>
        </Grid>
        </Grid>
		



		</Grid>	
  		</Box> 	
*/