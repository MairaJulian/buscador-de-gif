import React, { useEffect, useState } from 'react'
import { Link } from 'wouter';
import './Gif.css'


function Gif({title, url, id}) {        
     
  return (

    <div className='card-gif'>
      <Link to={`/gif/${id}`}>
        <h4>{title}</h4>
        <img className='imagen' alt={title} src={url}/>
      </Link>
    </div>

    
  )
}

export default Gif