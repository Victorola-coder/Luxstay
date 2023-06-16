import React from 'react'
import { useParams } from 'react-router-dom'

export default function Detailed() {
    const {id} = useParams()
  return (
    <div>Detailed {id}</div> 
  )
}
