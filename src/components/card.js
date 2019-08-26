import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//import CardMedia from '@material-ui/core/CardMedia';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

//import { spacing } from '@material-ui/system';
import Box from '@material-ui/core/Box';

import { Link } from "react-router-dom";

import store from '../store/store';
import { useContext } from "react";
import { observer } from 'mobx-react';

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

const useStyles = makeStyles({
 
  number: {
	  display: "flex",
	  justifyContent: "center",
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
	types:{
		display: "flex",
		justifyContent:"space-around"
	},
	name:{
		flexGrow: 1,
		display:"flex",
		justifyContent: "center",
		textAlign: "center",
		//fontSize: "calc( (100vw - Vmin)/(Vmax - Vmin) * (Fmax - Fmin) + Fmin)",
		
	},
	avatar:{
		display:"flex",
		justifyContent: "center"

	},
	avatarSize:{
		 width: 120,
    height: 120,
	},
	/*
	types:{
		flexGrow: 1,
		display: "flex",
		justifyContent: "space-around",
	},
	*/
	typesName:
	{
		display: "block",
		padding: "3px",
		width: "50px",
		textAlign:"center ",
		boxShadow: " 0px 0px 10px 0.5px rgba(0,0,0,0.2)"
	},

	  card: {
		  display:"block",
		margin: " 8px 6px 10px 8px",
		Width: 260,
		Height:  340,
  },
});






const PokeCard = observer((props) => 
{

	const classes = useStyles();
	  	  const localStore = useContext(store)

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
		  

  return (
    <Card className={classes.card}>
	  	<Link to ={props.lin} style={{textDecoration : 'none' , color: "black"}} onClick= { () => (  localStore.CurrentPokemonPage(props.number)) }>  
	  <CardActionArea>

      <CardContent >

        <Typography className={classes.number} color="textSecondary" gutterBottom>
          {props.number}
        </Typography>
        <Typography variant="h5" component="h3" className={classes.name}>
          {props.name}
        </Typography >
	  <Box className={classes.avatar}  >
	    <Avatar alt="Remy Sharp" src={props.ava} className={classes.avatarSize} />
	  </Box>
        <Typography className={classes.types} color="textSecondary">
          {props.types.map(item => (<div style={{backgroundColor : "#" + colors[item.type.name] , color: fight(item.type.name) }} className={classes.typesName}	><h5>{item.type.name}</h5></div>
  	))}
        </Typography>
      </CardContent>
</CardActionArea>
  </Link>

    </Card>

  );
});


export default PokeCard;