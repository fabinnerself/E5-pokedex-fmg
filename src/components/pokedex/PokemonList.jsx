import React from 'react'
import PokemonCard from './PokemonCard'
import './../../styles/pokeList.css'


function PokemonList({pokemons,isFilering}) {
  return (
    <div className='pokemons__cards'>{
      pokemons?.map(pokemon => {  
        const pokemonUrl = isFilering ? pokemon?.pokemon?.url : pokemon?.url
        const pokemonName = isFilering ? pokemon?.pokemon?.name : pokemon?.name
       
      return(<PokemonCard key={pokemonName} url={pokemonUrl}  />)
    })}</div>
  )
}

export default PokemonList