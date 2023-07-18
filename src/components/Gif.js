import React, { useEffect, useState } from 'react'
import { Link } from 'wouter';
import './Gif.css'


function Gif({title, url, id}) {        
     
  return (

    <div className='card-gif'>
      <Link to={`/gif/${id}`} className='link'>
        <div className='titleContainer'>
          <h4>{title}</h4>
        </div>
        <div className='imagenContainer'>
          <img className='imagen' alt={title} src={url}/>
        </div>
      </Link>
    </div>

    
  )
}

export default Gif