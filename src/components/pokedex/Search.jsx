import React,{ useRef ,useContext  }  from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import { Text , LanguageContext } from './../../containers/Language';
import './../../styles/search.css'

function Search({handleSearch}) {
    const inputRef = useRef()
    const { dictionary } = useContext(LanguageContext);

    const onSearch = ()=>{
        
        handleSearch(inputRef.current.value.toLowerCase().trim())
        inputRef.current.value = ""
    }
   
  return (
    <div className='search'>
        <div  >
          <IoSearchOutline className='search_icon' />
          <input className='search-input-in' ref={inputRef} type="search" placeholder={dictionary.s_p_enter_text}  /> 
          <button  className='search_btn' onClick={onSearch}><Text tid="s_b" /> </button>
      </div>
    </div>
  )
}

export default Search