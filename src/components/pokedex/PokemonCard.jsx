import React, { Fragment,useContext } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { tipos } from '../../utils/helpers'
import { FiLoader } from "react-icons/fi";
import { Text, LanguageContext} from './../../containers/Language';
import './../../styles/pokeCard.css'

function PokemonCard({url}) {

  const [pokemon, setPokemon   ] = useFetch(url)
  const { dictionary } = useContext(LanguageContext);

  useEffect(()=>{
    if(url){
      getPokemon(url)
    }
  },[url])

  const getPokemon = (url)=>{
    setPokemon(url)
  }

  let tipes = pokemon?.types?.map(type => type.type.name)
  if(tipes === undefined){    
    tipes = []
    tipes[0] = "normal"
  }
   

  return (   
    <Link className='poke' to={`/pokedex/details/${pokemon?.name}`}>
    <div className={`poke_card type--${tipes[0]}`}>   
        <div className='poke_card-header'>
        <img src={pokemon?.sprites?.other?.['official-artwork']?.front_default} alt={pokemon?.name}   />
             
        </div>   
      <div className='poke_card-body'>
        <h2 className='poke_card-name'>{pokemon?.name}</h2>
        <span className='poke_card-types'>
        {tipes?.map((type,index)=>{
          const id = Date.now()+Math.random()        
          return (<Fragment key={id}>
            {index > 0 ? (<>{" / "} <span>{dictionary[type]}</span></>) :
            (<span>{dictionary[type]}</span>)
            }        
          </Fragment>)
        })}
        </span>
        <p className='poke_card-label'  ><Text tid="d_t_1" /></p>      
      </div>
      <div className='poke_card-stats'>
        <div className="poke_card-items">
          <span >HP</span>
          <span>{pokemon?.stats[0].base_stat}</span>
        </div>      
        <div className="poke_card-items">
          <span  ><Text tid="d_t_1_s_s_a" /></span>
          <span>{pokemon?.stats[1].base_stat}</span>
        </div>
        <div className="poke_card-items extra-padding ">
          <span  ><Text tid="d_t_1_s_s_d" /></span>
          <span  > {pokemon?.stats[2].base_stat}</span>
        </div>
        <div className="poke_card-items extra-padding">
          <span  ><Text tid="d_t_1_s_s_s" /></span>
          <span  >{pokemon?.stats[5].base_stat}</span>
        </div>
      </div>
    </div>
    </Link>
  )
}

export default PokemonCard