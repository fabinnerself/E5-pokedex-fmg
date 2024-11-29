import React, {useContext, useEffect , useRef } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { Text, LanguageContext } from './../../containers/Language';
import './../../styles/filters.css'

function Filters({ handleTypeFilter }) {
  const [types,setTypes] = useFetch()
  const selectRef = useRef(null)
  const { dictionary } = useContext(LanguageContext);

  useEffect(()=>{ 
    getTypes() 
  },[])

  const getTypes = ()=>{
    setTypes("https://pokeapi.co/api/v2/type")
  }

  return (
    <div className='select'>
    <select className='select' ref={selectRef} onChange={()=>handleTypeFilter(selectRef.current.value)}>
      <option value=""><Text tid="f_c_o1" /> </option>
      {types?.results?.map(type => (
        <option key={type.name} value={type.name}>{dictionary[type.name]}</option>
      ))}
    </select></div>
    
  )
}

export default Filters