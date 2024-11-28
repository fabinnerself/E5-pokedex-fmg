import React from 'react';
import { useLocation } from 'react-router-dom';
import { Text  } from './../../containers/Language';
import './../../styles/nofound.css'

const NotFound = () => {
  const location = useLocation(); 

  return (
    <div>
      <h1>Error 404: <Text tid="e_h1_t" />  </h1>
      <p className='notFound_form'><Text tid="e_p_l1" /></p>
      <p className='notFound_form'><Text tid="e_p_l2" /> : <strong>{location.pathname}</strong></p>  
    </div>
  );
};

export default NotFound; 