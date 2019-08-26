import React from 'react';
//import ReactDOM from 'react-dom';
//import Box from '@material-ui/core/Box';




import AppBar from '@material-ui/core/AppBar';
//import Toolbar from '@material-ui/core/Toolbar';
//import IconButton from '@material-ui/core/IconButton';
//import Typography from '@material-ui/core/Typography';
//import InputBase from '@material-ui/core/InputBase';
//import {  makeStyles } from '@material-ui/core/styles';
//import MenuIcon from '@material-ui/icons/Menu';
//import SearchIcon from '@material-ui/icons/Search';
//import Button from '@material-ui/core/Button';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { red } from '@material-ui/core/colors';

//import store from '../store/store';
//import { useContext } from "react";


const theme = createMuiTheme({
  palette: {
    primary: red,
  },
	
});


/*
const useStyles = makeStyles(theme => ({
 root:
{
	width: "100%",
	maxHeight: "80%",
	flexGrow: 1,
	display: "flex",
	justifyContent: "center",
}
}));

*/

const Footer = () => {
 // const classes = useStyles();

  return (
<ThemeProvider theme={theme}>
        <AppBar position="static" color="primary">
	  <h1>Pokedex by Dimas</h1>
	  	  <h3>все права защищены святой водой </h3>
	  <h2>Конец</h2>

	  </AppBar>
	  </ThemeProvider>
  )
}

export default Footer;