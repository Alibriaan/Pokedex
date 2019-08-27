/* eslint-disable no-unused-vars */
/* eslint-disable semi */
import React, { useContext, useEffect } from 'react'

import PokeCard from './card'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Fade from '@material-ui/core/Fade'

import store from '../store/store'
import { observer } from 'mobx-react'

import Pagination from 'react-js-pagination'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '10px',
    backgroundColor: 'Gainsboro',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center'
  },
  butt:
{
  width: '100%',
  maxHeight: '80%',
  flexGrow: 1,
  display: 'flex',
  justifyContent: 'center'
}
}));

const PokeList = observer((props) => {
  const localStore = useContext(store)
  const classes = useStyles();

  // Необходимо для исправления отображения типа покемона в карте при возврате
  useEffect(() => {
    localStore.pokemon = undefined;
    localStore.species = undefined;
  });

  return (
    <Fade in={localStore.fade} >
      <Box component="main">
        <Grid container className={classes.root}>
          <Grid>
            <Grid container justify="center" >
              {localStore.pokemons.map(item => (
                <PokeCard color={item.type} pok={item} lin={'/pokemon/' + item.id} number={item.id} name={item.name} types={item.types} ava={item.sprites.front_default}/>
              ))}
              <Grid container justify="center" >
                <Box className={classes.butt} mt={2} mb={4}>
                  <Pagination className={classes.pagination}
                    hideDisabled
                    pageRangeDisplayed={5}
                    activePage={localStore.activePage}
                    itemsCountPerPage={localStore.loadCount}
                    totalItemsCount={(localStore.SearchText.length > 0 || localStore.typesCheckbox.length > 0) ? localStore.poksPag.length : 807}
                    onChange={ (localStore.pokemonsRepeat.length < 807) ? localStore.PageBefore807 : localStore.handlePageChange}
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Fade>
  );
})

export default PokeList;
