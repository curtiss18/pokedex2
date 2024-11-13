import Header from './components/header'
import SideNav from './components/SideNav'
import PokeCard from './components/PokeCard'

import { useState } from 'react'

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(0)
  const [showSideMenu, setShowSideMenu] = useState(false)

  function handleToggleMenu() {
    setShowSideMenu(!showSideMenu)
  }

  return (
    <>
      <Header handleToggleMenu={handleToggleMenu} />
      <SideNav 
        selectedPokemon={selectedPokemon} 
        setSelectedPokemon={setSelectedPokemon} 
        handleToggleMenu={handleToggleMenu} 
        showSideMenu={showSideMenu} 
      />
      <PokeCard selectedPokemon={selectedPokemon} />
    </>
  )
}

export default App