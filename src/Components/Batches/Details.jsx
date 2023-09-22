import React from 'react'
import { useLocation } from 'react-router-dom'
import { batchDetils } from '../../constants';

const Card = ({props}) => {
  const {name,mentor,isCompleted,totalStudents,income} = props
  return(
    <div>
      <h2>{name}</h2>
      <h2>{mentor}</h2>
      <h2>{isCompleted}</h2>
      <h2>{totalStudents}</h2>
      <h2>{income}</h2>

    </div>
  )
}


function Details() {
  const location = useLocation();
  const name = location.state
  console.log(name)
  return (
    <div>
      {batchDetils.map((value) => (
        value.name === name && <Card props={value}/>
      ))}
    </div>
  )
}

export default Details