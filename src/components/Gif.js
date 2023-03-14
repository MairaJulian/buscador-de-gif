import React, { useEffect, useState } from 'react'


function Gif({title, url, id}) {        
     
  return (

    <div>
        <h4>{title}</h4>
        <small>{id}</small><br/>
        <img src={url}/>
    </div>

    
  )
}

export default Gif