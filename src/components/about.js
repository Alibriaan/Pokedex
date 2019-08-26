import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
//import CardActionArea from '@material-ui/core/CardActionArea';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//import CardMedia from '@material-ui/core/CardMedia';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//import Avatar from '@material-ui/core/Avatar';

//import { spacing } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

//import { Link } from "react-router-dom";

import store from '../store/store';
import { useContext } from "react";
import { observer } from 'mobx-react';

import Header from './header';
import Footer from './footer';
/*
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

*/

const useStyles = makeStyles(theme => ({


    card: {
        display:"flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        maxwidth: "100vh",
        maxheight: "100vw",
        minwidth: "40vh",
        minHeight: "40vw",
      },
      grid:{
        minHeight: "100vh",
      },
      img:{
        Height:"20%",
        width: "20%",
      },
      typogra:
      {
        textAlign: "center",
        fontWeight: "40vh"
      }
}));






const About = observer((props) => 
{

    const classes = useStyles();
    const localStore = useContext(store)
    localStore.PokemonGet(20);


  return (

<Box className={classes.main}>
    <Header disable={true}/>
       <Grid container justify="center"  alignItems="center" className={classes.grid}>
    <Box className={classes.box} mt={1} mb={1} ml={1} mr={1}>
    <Card className={classes.card}>

     <img src="longico-23-512.png"  className={classes.img} alt="Pokedex" />

    <CardContent>
      
      <Typography variant="body2" color="textSecondary" component="p" className={classes.typogra}>
       Этот покедекс создан мной (Соболевским Дмитрием Анатолиевичем)
      </Typography>
    </CardContent>

      <CardContent>
        <Typography paragraph  className={classes.typogra}>Для нинтендо:</Typography>
        <Typography paragraph  className={classes.typogra}>
        Пожалуйста не бейте я всего лишь выполнял задание
        </Typography>
      </CardContent>
  </Card>
  </Box>
  </Grid>

    <Footer />
  </Box>
  );
});


export default About;