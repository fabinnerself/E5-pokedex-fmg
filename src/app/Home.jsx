import React ,{ useRef ,useContext } from 'react'
import { Link,  useNavigate } from 'react-router-dom'
import { types,useNameContext } from '../contexts/nameContext'
import { Text, LanguageContext } from '../containers/Language';
import './../styles/home.css'

function Home () {
  const inputRef = useRef()
  const [name, dispatch] = useNameContext()
  const navigate = useNavigate()
  const { dictionary } = useContext(LanguageContext);

  const setName = () => {
    dispatch({
      type: types.SET_NAME, 
      payload: inputRef.current.value.trim()
    })
    console.log(inputRef.current.value)
     inputRef.current.value = ""
     navigate("/pokedex")
  }

  const clearName = () => {
    dispatch({
      type: types.CLEAR_NAME
    })    
  }  

  return (
    <div className='home'>
      <div className='home__content'>           
      
      <h2 className='home__title' ><Text tid="h_t1_a" /> {name ? (<> <Text tid="h_t1_b" /> <span className='home_user'>{name}</span> </>) : (<><Text tid="h_t1_c" /></>)
        } ! </h2>
        <div>
          {name ? (<><p className='home__text'><Text tid="h_l2_a" />  <Link className='home__link' to="/pokedex">Pokédex</Link>  <Text tid="h_l2_b" />  </p>
          <button className='home__btn btn-radiuos' onClick={clearName}> <Text tid="h_b1" /> </button>
          </>) : (<><p className='home__text'> <Text tid="h_l3_a" /> </p>          
          <input className='home__input'  ref={inputRef}  type="text" placeholder={dictionary.enterText} /> 
          <button className='home__btn' onClick={setName}><Text tid="h_l3_b" /></button>
          </>)}         
        </div>  
        <img src="./src/assets/img/pokedex.png" alt="" className='home_pokedex' />    
      </div>
    </div>
  )
}
 
export { Home }
