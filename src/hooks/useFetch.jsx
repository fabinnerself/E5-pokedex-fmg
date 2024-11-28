import React from 'react'
import { useState } from 'react'
import axios from 'axios'

function useFetch() {
    const [data,setData] = useState(null)
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)
    
    const  dataFetch = (url) => {
        setLoading(true)
        setError(null)

        axios.get(url)        
            .then(res=>{
                    
                setData(res.data)           
            })
            .catch(err=>{
                console.log(err)
                setError(err.message)
            })
            .finally(()=>{
                setLoading(false)
            })        
    }

  return [data, dataFetch, loading, error] 
}


export  { useFetch } 
