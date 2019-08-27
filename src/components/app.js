/* eslint-disable semi */
/* eslint-disable no-unused-vars */
import React from 'react'

import Header from './header'
import PokeList from './pokemonlist'
import Footer from './footer'

const App = () => {
  return (
    <div>
      <Header disable={false}/>

      <PokeList />
      <Footer />
    </div>
  )
}

export default App;
