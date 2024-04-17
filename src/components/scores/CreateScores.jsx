import React, { useEffect } from 'react'
import UseGlobalStates from '../../hooks/UseGlobalStates'

const CreateScores = () => {
  const {setTitle} = UseGlobalStates() 

useEffect(()=>{
    setTitle(()=>"Scores")
},[])
  return (
    <div>CreateScores</div>
  )
}

export default CreateScores