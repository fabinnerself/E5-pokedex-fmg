import React ,{ useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import { tipos } from '../utils/helpers'
import { Text  } from '../containers/Language';
import { LiaRulerVerticalSolid } from "react-icons/lia";
import { FaWeightScale } from "react-icons/fa6";
import { MdKeyboardArrowLeft } from "react-icons/md";
import './../styles/details.css'


function Details() {
    const params = useParams()
    const [pokemon, setPokemon] = useFetch()     
    const [activeTab, setActiveTab] = useState('caracteristicas');

    let type_Css ="normal"

    useEffect(()=>{
      if(params.name){
        getPokemon()
      }

    },[params.name])

    const getPokemon = ()=>{
      setPokemon(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
    }

    let tipes = pokemon?.types?.map(type => type.type.name)

    
    if(tipes === undefined){    
      tipes = []
      tipes[0] = "normal"      
    }else{
      type_Css = pokemon.types?.[0].type.name
    }   


     const moves = pokemon?.moves?.map(move => `${move.move.name}`) || []

    const renderContent = () => {
        switch (activeTab) {             
            case 'caracteristicas':
                return (<>
                <div className='poke_det_tab_item'>  
                        <span>
                            <img className="poke_det_mimg" src={pokemon?.sprites?.other?.dream_world?.front_default} alt={pokemon?.name}   /> 
                                               
                            <span className='poke_det_map_cont' >{tipes?.map(type => (                            
                                <span key={type} className={`poke_det_tipe_format ${type}`}>{tipos[type]}</span>
                            ))}</span>   
                        </span>
                </div>                
                </>);
            case 'stat':
                return (<>
                    <div className='poke_det_tab_item'>
                        <span>
                            <h3 className='poke_det_subTitle'><Text tid="d_t_1_s" /></h3>
                            <div className='poke_det_c-stats'>
                                <div className='poke_det_c-items'><span><LiaRulerVerticalSolid /><Text tid="d_t_1_s_p" />: </span>
                                <span> {pokemon?.weight} Mts</span></div>
                                <div className='poke_det_c-items'><span><FaWeightScale /><Text tid="d_t_1_s_a" />: </span>
                                <span> {pokemon?.height} Kg</span>   </div>                            
                            </div>                 
                        </span>
                        <span>
                        <h3 className='poke_det_subTitle'><Text tid="d_t_1_s_s" /></h3>    
                            <div className='poke_det_c-stats'>
                                <div className='poke_det_c-items'><span>HP: </span> <span> {pokemon?.stats[0].base_stat}</span></div>
                                <div className='poke_det_c-items'><span><Text tid="d_t_1_s_s_a" />:</span> <span> {pokemon?.stats[1].base_stat}</span></div>
                                <div className='poke_det_c-items'><span><Text tid="d_t_1_s_s_d" />:</span> <span> {pokemon?.stats[2].base_stat}</span></div>
                                <div className='poke_det_c-items'><span><Text tid="d_t_1_s_s_s" />:</span> <span> {pokemon?.stats[5].base_stat}</span></div>
                            </div>                    
                        </span>
                        <span>
                            <h3 className='poke_det_subTitle'><Text tid="d_t_1_s_h" /></h3>
                                <span>{pokemon?.abilities?.map(ability => (
                                <span key={ability.ability.name} className='poke_det_h_hab'>{ability.ability.name}</span>
                            ))}</span> 
                        </span>
                </div> </>
                );
     
            case 'movimientos':
                return (
                    <div className='poke_det_tab_item'>                                               
                        <div className='poke_det_moves'>                             
                            {moves?.map((mo, index) => (
                                <p key={index}>{mo}</p>
                            ))} 
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

  return (
    <div className='poke_det'>
        <div  className={`${type_Css}`}>  
            <div className='poke_det_sub_title'   >
                <Link to="/pokedex" alt="Volver" className='poke_det_back-button' > <MdKeyboardArrowLeft   /> </Link>
                    <h2 className='poke_det_name poke_det_name_extra'>{pokemon?.name}</h2>
                    <h1><Text tid="d_l2" /></h1>
                    <p className='poke_det_num poke_det_num_extra'>#{pokemon?.id?.toString().padStart(3,"0")}</p >                    
            </div >      
        <div   className='poke_det_tab'>
            <div className='poke_det_tab_desc'>         
                <h3  onClick={() => setActiveTab('caracteristicas')}
                    style={{ backgroundColor: activeTab === "caracteristicas" ? "#3b6e8d" : "transparent" }} className='poke_det_tabl_title'> <Text tid="d_t_1" /></h3 >
                <h3  onClick={() => setActiveTab('stat')} 
                    style={{ backgroundColor: activeTab === "stat" ? "#3b6e8d" : "transparent" }} className='poke_det_tabl_title'><Text tid="d_t_2" /></h3 >         
                <h3  onClick={() => setActiveTab('movimientos')} 
                    style={{ backgroundColor: activeTab === "movimientos" ? "#3b6e8d" : "transparent" }} className='poke_det_tabl_title'><Text tid="d_t_3" /></h3 >            
            </div>
            {renderContent()}
        </div>            
    </div>
    </div>
    
  )
}

export { Details }