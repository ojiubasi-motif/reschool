import React, { useEffect } from 'react'
import UseGlobalStates from '../../hooks/UseGlobalStates'

const ScoresView = () => {
  const {setTitle} = UseGlobalStates() 

useEffect(()=>{
    setTitle(()=>"Scores record")
},[])

  return (
    <div>ScoresView</div>
  )
}

export default ScoresView