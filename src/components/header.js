import React from 'react';
//import ReactDOM from 'react-dom';
import { observer } from 'mobx-react';
//import  {observable , computed , decorate} from 'mobx';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { red } from '@material-ui/core/colors';
//import { white } from '@material-ui/core/colors';




import store from '../store/store';
import { useContext } from "react";

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Checkbox from '@material-ui/core/Checkbox';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Drawer from '@material-ui/core/Drawer';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ContactIcon from '@material-ui/icons/Contacts';
import CodeIcon from '@material-ui/icons/Code';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import Box from '@material-ui/core/Box';


import { Link } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: red,
  },
	
});

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
	tool:{
		display: "flex",
		justifyContent: 'space-between',

	},
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
	button:{
		  display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
	},
  search: {
	  display:"flex",
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    width: '55%',
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
	 
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
  tagsroot:{
    display: "flex",
    justifyContent: 'center',
  },
	list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
	
sideMenuText:{
	display:"flex",
	justifyContent: "center",
	backgroundColor: red,
},
stick:{
  postion: "fixed",
  top: 0,
}

}));






const Header = observer(( props) => 
{
	  const classes = useStyles();
  	  const localStore = useContext(store)

	 var visibility = () =>
	  {
		  if(props.disable)
			  {
				  return "none";
			  }
	  }
	  
	const [state, setState] = React.useState({
    left: false,
  	});

   

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [side]: open });
  };
	
	// 237 строка обнуление необходимо для избежания бага с отображением цвета при повторном заходе в покемона бойцовского типа

  const sideList = side => (
	  <div
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}>
      
		<List className={classes.list}>
	      <ListItem className={classes.sideMenuText} >
            <ListItemText primary="Pokedex"/>
          </ListItem>
		</List>
      <Divider />
      <List>
		<Link to = "/"style={{textDecoration : 'none'  ,color: "#000"}}>  
		  <ListItem button>
            <ListItemIcon><HomeIcon /></ListItemIcon>
		  <ListItemText primary="Home"/>
          </ListItem>
		</Link>
		<Link to = "/about"style={{textDecoration : 'none'  ,color: "#000"}}>  
		  <ListItem button>
            <ListItemIcon><InfoIcon /></ListItemIcon>
		  <ListItemText primary="About"/>
          </ListItem>
		</Link>
		
		<a  href="https://github.com/Alibriaan/Pokedex"  style={{textDecoration : 'none'  ,color: "#000"}}>  
          <ListItem button>
            <ListItemIcon><CodeIcon /></ListItemIcon>
            <ListItemText primary="Github"/>
          </ListItem>
		</a>
		<a  href="https://telegram.me/Alibrian"  style={{textDecoration : 'none'  ,color: "#000"}}>  
		  <ListItem button>
            <ListItemIcon><ContactIcon /></ListItemIcon>
            <ListItemText primary="Contacts"/>
          </ListItem>
		</a>
      </List>
    </div>
  );


  return (
	      <ThemeProvider theme={theme}>
     <Box className={classes.stick}> 
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.tool}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
	  		onClick={toggleDrawer('left', true)}
          >
            <MenuIcon />
          </IconButton>
						<Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
          <Typography className={classes.title} variant="h6" noWrap>
			<Link to = "/"style={{textDecoration : 'none' , color:"white" }} onClick={ () => { localStore.pokemon = undefined ; localStore.species = undefined}} >  
				Pokedex
			</Link>
          </Typography>
	  <div className={classes.button} style={{ display: visibility()}}>
          <Button  color="inherit" onClick= { () => (setTimeout(localStore.PokemonGet(10) , 1000))}>10 Pokemons</Button>
	        <Button  color="inherit" onClick= { () => (setTimeout(localStore.PokemonGet(20) , 1000)) }>20 Pokemons</Button>
	        <Button  color="inherit" onClick= { () => (setTimeout(localStore.PokemonGet(50) , 1500)) }>50 Pokemons</Button>
	  </div>
	  
	  
      <div className={classes.search} style={{ display: visibility()}}>
            <div className={classes.searchIcon} >
              <SearchIcon />
            </div>
            <InputBase disabled={props.disable} value={localStore.SearchText} onChange={localStore.SearchPokemons} id="search"
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}/>
      </div>
        </Toolbar>
      </AppBar>
    </div>


<ExpansionPanel className={classes.exproot} style={{ display: visibility()}}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography className={classes.heading}>Types tags</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
	    
      
        <ThemeProvider theme={theme}>

	<FormGroup row className={classes.tagsroot} >

      <FormControlLabel
        control={
          <Checkbox value="normal"  id="normal"  onClick={localStore.CheckBoxPokemon}  color="primary" />
        }
        label="normal"
      />
      <FormControlLabel
        control={
          <Checkbox value="fighting" id="fighting" onClick={localStore.CheckBoxPokemon} color="primary"/>
        }
        label="fighting"
      />
      <FormControlLabel
        control={
          <Checkbox value="flying" id="flying" onClick={localStore.CheckBoxPokemon} color="primary"/>
        }
        label="flying"
      />
      <FormControlLabel
        control={
          <Checkbox value="poison" id="poison" onClick={localStore.CheckBoxPokemon} color="primary"/>
        }
        label="poison"
      />
      <FormControlLabel
        control={
          <Checkbox value="ground"  id="ground" onClick={localStore.CheckBoxPokemon} color="primary"/>
        }
        label="ground"
      />
      <FormControlLabel
        control={
          <Checkbox value="rock"  id="rock "onClick={localStore.CheckBoxPokemon} color="primary"/>
        }
        label="rock"
      />
      <FormControlLabel
        control={
          <Checkbox value="bug" id="bug" onClick={localStore.CheckBoxPokemon} color="primary"/>
        }
        label="bug"
      />
      <FormControlLabel
        control={
          <Checkbox value="ghost" id="ghost" onClick={localStore.CheckBoxPokemon} color="primary"/>
        }
        label="ghost"
      />
      <FormControlLabel
        control={
          <Checkbox value="steel" id="steel" onClick={localStore.CheckBoxPokemon} color="primary"/>
        }
        label="steel"
      />
      <FormControlLabel
        control={
          <Checkbox value="fire" id="fire" onClick={localStore.CheckBoxPokemon} color="primary"/>
        }
        label="fire"
      />
      <FormControlLabel
        control={
          <Checkbox value="water" id="water" onClick={localStore.CheckBoxPokemon} color="primary"/>
        }
        label="water"
      />
      <FormControlLabel
        control={
          <Checkbox value="grass" id="grass"  onClick={localStore.CheckBoxPokemon} color="primary"/>
        }
        label="grass"
      />
      <FormControlLabel
        control={
          <Checkbox value="electric" id="electric" onClick={localStore.CheckBoxPokemon} color="primary"/>
        }
        label="electric"
      />
      <FormControlLabel
        control={
          <Checkbox value="psychic" id="psychic" onClick={localStore.CheckBoxPokemon} color="primary"/>
        }
        label="psychic"
      />
      <FormControlLabel
        control={
          <Checkbox value="ice" id="ice" onClick={localStore.CheckBoxPokemon} color="primary"/>
        }
        label="ice"
      />
      <FormControlLabel
        control={
          <Checkbox value="dragon" id="dragon" onClick={localStore.CheckBoxPokemon} color="primary"/>
        }
        label="dragon"
      />
      <FormControlLabel
        control={
          <Checkbox value="dark"  id="dark" onClick={localStore.CheckBoxPokemon} color="primary"/>
        }
        label="dark"
      />
      <FormControlLabel
        control={
          <Checkbox value="fairy" id="fairy" onClick={localStore.CheckBoxPokemon} color="primary"/>
        }
        label="fairy"
      />
      <FormControlLabel
        control={
          <Checkbox value="unknown" id="unknown" onClick={localStore.CheckBoxPokemon} color="primary"/>
        }
        label="unknown"
      />
      <FormControlLabel
        control={
          <Checkbox value="shadow" id="shadow" onClick={localStore.CheckBoxPokemon} color="primary"/>
        }
        label="shadow"
      />
			</FormGroup>
      
      </ThemeProvider>

        </ExpansionPanelDetails>
      </ExpansionPanel>
</Box>
	  </ThemeProvider>

 

  );
})

export default Header;




// Mobx example component

/*
import store from '../store/store';
import { useContext } from "react";

 const App = observer( () => {
  const localStore = useContext(store)
  return (
    <div className="App">
      <h2>Test stora! {localStore.count}</h2>
	  <input value="Increment"type="button" onClick={localStore.Increment} />
	  <h1>{localStore.text}</h1>
	  <input type="text"  onChange={localStore.ChangeText}/>
	  </div>
  )
})
 
 export default App;

*/