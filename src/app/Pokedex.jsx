import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Search from '../components/pokedex/Search'
import Filters from '../components/pokedex/Filters'
import { useFetch } from '../hooks/useFetch'
import PokemonList from '../components/pokedex/PokemonList'
import PokemonCard from '../components/pokedex/PokemonCard'
import { useNameContext } from '../contexts/nameContext'
import Menu from '../components/Menu';
import { Text } from '../containers/Language';
import LanguageSelector from '../components/LanguageSelector';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FiLoader } from "react-icons/fi";
import { BiSolidErrorAlt } from "react-icons/bi";

import Layout from '../layouts/Layout'

import './../styles/pokedex.css'

function Pokedex() {

  const [pokemons, setPokemons,loading, errorP] = useFetch()
  const [pokemonUrl,setPokemonUrl] = useState(null)
  const [name ] = useNameContext()
  const [isFilering,setIsFilering] = useState(false)

  useEffect(()=>{
    getPokemons()
  },[])

  const handleSearch = (value)=>{ 
    
    if(! value) {
      setIsFilering(false)
      setPokemonUrl(null)
      setPokemons(`https://pokeapi.co/api/v2/pokemon`)
    }else {      
      setPokemonUrl(`https://pokeapi.co/api/v2/pokemon/${value}`)
    }
  }

  const getPokemons = ()=>{
    setPokemons(`https://pokeapi.co/api/v2/pokemon`)
  }  

  const onNext = ()=>{
    setPokemons(pokemons?.next)
  }

  const onPrev = ()=>{
    setPokemons(pokemons?.previous)
  }  

  const onLast = ()=>{         
      const totalPokemons = pokemons?.count || 0; 
      const limit = 20; 
      const lastPage = Math.max(totalPokemons - limit, 0); 

      console.log(`https://pokeapi.co/api/v2/pokemon?offset=${lastPage}&limit=20`)
      setPokemons(`https://pokeapi.co/api/v2/pokemon?offset=${lastPage}&limit=20`)       
  }    

const onFirst = () => {
  setPokemons(`https://pokeapi.co/api/v2/pokemon`)
}

  const handleTypeFilter = (type)=>{
    console.log("type ",type)
    if(!type){
      setIsFilering(false)
      setPokemons(`https://pokeapi.co/api/v2/pokemon`)
    }else{
      setIsFilering(true)
      setPokemons(`https://pokeapi.co/api/v2/type/${type}`)
    }
  }
  
  const pokemonArray = isFilering ? pokemons?.pokemon : pokemons?.results

  const [theme, setTheme] = useState('light');

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    document.body.className = newTheme; 
  };

  return ( 
    <Layout>
    <div className='pokedex'>
      <div className='pokedex__container'>
      <div className='pokedex__header'>

        <div className='pokedex_hero' />
        <div className='pokedex_sub_title'>
          <Link to="/" alt="Volver"  > <MdKeyboardArrowLeft className='pokedex_back-button'  /> </Link>      
          <p><Text tid="p_st_l1_a" />  "<b className='home_user'>{name}</b>"  
          <Text tid="p_st_l1_b" /> </p>
        </div>

        <div className='pokedex__form'>
            <div className='pokedex__form-row'>
                <Search handleSearch={handleSearch} />
                <Filters handleTypeFilter={handleTypeFilter} />
            </div>
            <div className='pokedex__form-row'>
              <LanguageSelector />
              <Menu onThemeChange={handleThemeChange} />
            </div>
           
        </div>
          
        <div className='pokedex__paginate' >
        <button onClick={onFirst} disabled={!pokemons?.previous}>{'<|'}</button>
          <button onClick={onPrev} disabled={!pokemons?.previous}>{'<'}</button>
          <button onClick={onNext} disabled={!pokemons?.next}>{'>'}</button>
          <button onClick={onLast} disabled={!pokemons?.next}>{'|>'}</button>
        </div>

          <div  >
            {errorP ?  (<h1 ><Text tid="p_e_m" /> <BiSolidErrorAlt className='header__error'  />{errorP} <BiSolidErrorAlt className='header__error' /></h1> ) : 
            ( loading  ? (<h1 className='header__loading'><FiLoader /><Text tid="p_l_m" />...<FiLoader /></h1>) 
            :( pokemonUrl ? (<PokemonCard url={pokemonUrl} /> ) 
              : (<PokemonList pokemons={pokemonArray} isFilering={isFilering}/>)
            ))  }
            
          </div>
      </div>  
      </div>        
    </div></Layout>
  )
}

export { Pokedex }
