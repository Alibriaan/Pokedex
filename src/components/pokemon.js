import React , {useState} from 'react';
import ReactDOM from 'react-dom';


import { observer } from 'mobx-react';
import  {observable , computed , decorate} from 'mobx';
import store from '../store/store';
import { useContext } from "react";


import Header from './header';
import Error from './error';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import { spacing } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import { Zoom } from '@material-ui/core';

	
const useStyles = makeStyles({
  root:
	{
		minHeight: "60%",
		display:"flex",
		justifyContent:"center",
	},
	
	card: {
    minWidth: "80%",
	maxWidth: "1600px",
	 display:"flex",
     justifyContent:"center", 
  },
	content:{
		flexGrow: 1,
		padding: 0,
	}, 
  number: {
	  display: "flex",
	  justifyContent: "center",
  },
  
	types:{
		display: "flex",
		justifyContent:"space-around"
	},
	name:{
		flexGrow: 1,
		display:"flex",
		justifyContent: "center"
	},
	avatar:{
		display:"flex",
		justifyContent: "center"

	},
	avatarSize:{
		 width: 300,
		height: 300,
		display:"flex",
		justifyContent: "center",
		alignItems:"center",
		

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
});

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
			if( prop.types.length > 1)
				{
					return  "linear-gradient( to right ," + "#" +colors[prop.types[0].type.name]  + " 50% ,  #" + colors[prop.types[1].type.name] +" 50%)";
				}
			else
				{
					return  "#" + colors[prop.types[0].type.name];
				}
		}
		
		
		  const [checked, setChecked] = useState(true);
		//  const [disable, setDisable] = useState(true);

			  
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
	  return (
				   <Box>
		<Header disable={true}/>
	   <Zoom in={checked} timeout={{ enter: 400}}>   
		 <Box  className={classes.root} mt={2} >
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
      	</CardContent>
</Card>
</Box>
</Zoom>							
						
	</Box>							
	  );
}});



// статы
/*
	{localStore.pokemon.stats.map( (item) => (
			<Box component="span" className={classes.statname}>
			<h4>{item.stat.name}</h4>
			<Box className={classes.stats}>
		  			<Box className={classes.fillStats} style={ {height: "100%", width: item.base_stat + "%" } }>
						{item.base_stat}
		  			</Box>
		  			<Box className={classes.emptyStats} style={ {height: "100%", width:  (100 - item.base_stat  ) + "%" } }>
					</Box>
				</Box>
			</Box>
))}		
*/

/*
		<Typography className={classes.statsbox}   variant="h4">
				{localStore.pokemon.stats.map( (item) => (
			<Box className={classes.stats}>
		  			<Box className={classes.fillStats} style={ {height: "100%", width: item.base_stat + "%" } }>
		  			</Box>
		  			<Box className={classes.emptyStats} style={ {height: "100%", width:  (100 - item.base_stat  ) + "%" } }>
					</Box>
				</Box>
))}						
		</Typography>
*/
     // можно юзать для статов
		/*
		
		<Avatar alt="Remy Sharp" src={localStore.pokemon.sprites.front_default} className={classes.avatarSize} />		
		
		<Box className={classes.stats}>
		  			<Box className={classes.fillStats} style={ {height: "100%", width: localStore.pokemon.stats[0].base_stat + "%" } }>
		  			</Box>
		  			<Box className={classes.emptyStats} style={ {height: "100%", width:  (100 - localStore.pokemon.stats[0].base_stat  ) + "%" } }>
					</Box>
				</Box>
		*/



/*
*/

//Главная часть
/*  
 <Typography className={classes.number}   variant="h4">
		  {localStore.pokemon.id} 
		  </Typography>
		  
		  		
		  <Typography variant="h3"  className={classes.name}>
		  {localStore.pokemon.name} 
		  </Typography >
		    
		  <Typography className={classes.avatar}>
		  <CardMedia className={classes.avatarSize} image={localStore.pokemon.sprites.front_default} title={localStore.pokemon.name} />
		   </Typography>
		    
		 <Typography className={classes.types}   variant="h5">
		  	{localStore.pokemon.types.map((item) => (
	  		<Box>{item.type.name}</Box>
		  
	  ))}
		  </Typography>
		  
		  */
export default CurrentPokemon;



	/*
			var pochinka = (znachenie) =>
			{
			  localStore.CurrentPokemonPage(znachenie); 
			}
			
			pochinka(props.match.params.id);
			*/
	
		/*
		if( localStore.pokemon === undefined)
		{
			
			var pochinka = (znachenie) =>
			{
			  localStore.CurrentPokemonPage(znachenie); 
			}
			
			pochinka(props.match.params.id);
			
			console.log( "Znachemie " + localStore.pokemon);
			
			var test = () =>{
			if(localStore.pokemon === undefined)
				{
					var errs = () =>
					{
						return (
						<Error error_type="INCORRECT POKEMON SELECTED"/>
					);
				}
					setTimeout(errs() , 1000);

				}
			}
			
			test();
			}
			
	
	*/
			/*
			if(isNaN(props.match.params.id))
				{
					
					return (
						<Error error_type="INCORRECT POKEMON SELECTED"/>
					)

			else
				{
					console.log("preobrazovano");
					
			var pochinka = (znachenie) =>
			{
			  localStore.CurrentPokemonPage(znachenie); 
			}
			
			pochinka(props.match.params.id);

					if(localStore.pokemon === undefined)
						{
							var err = () =>
							{
							return (<Error error_type="NOT CONNECTION"/>);
							}
							setTimeout(err() , 1000);
						}
					
				}
			
			*/



/*
		fetch("https://pokeapi.co/api/v2/pokemon/"+1).then(results => { return results.json();
    	}).then(data => {
			console.log(data);
			pokemons.push(data);
			if(pokemons.length > 0)
			{
					console.log("eto ne podkluchenie "); // Все норм присвоить значение
					fetch("https://pokeapi.co/api/v2/pokemon/"+props.match.params.id).then(resultss => { return resultss.json();
    				})
					.then(dataa => {
					console.log(dataa);
					pokemons.push(dataa);
					if(pokemons.length > 1)
					{
					console.log("vse norm po znacheniu");
					pochinka(props.match.params.id);
					}
					})
					.catch(error => {
						
						if( error != undefined)
							{
								console.log("hrenovoe znachenie");
								pochinka("textError");
							}
					});
				
				console.log(localStore.pokemon);
				if(localStore.pokemon === "textError")
					{
						return(<Error error_type="INCORRECT POKEMON SELECTED"/>);
					}
				
				}
				else
					{
						console.log("ne konektit");
					}
    	})	
*/


/*
		/*
			
			console.log(pokemons);
			
			
			else
				{
					
						fetch("https://pokeapi.co/api/v2/pokemon/"+1).then(results => { return results.json();
    					}).then(data => {
							//pokemons.push(data);
    						})
				
					if(typeof pokemons[1] != null) // Проблемы с подключением иначе не правильное значение
						{
							console.log("ne tot pokemon")
							return (<Error error_type="INCORRECT POKEMON SELECTED"/>);
						}
					else
						{
							return (<Error error_type="NOT CONNECTION"/>);
						}
				}
			
			console.log(pokemons);
			*/

