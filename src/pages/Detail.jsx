import React, {useContext, useEffect, useState} from 'react'
import Context from '../context/StaticContext';
import GifsContextProvider from '../context/GifsContext';
import './Detail.css'
import { API_KEY, API_URL } from '../services/Setting';

export default function Detail ({params}) {
    const {id} = params
    const [urlImagen, setUrlImagen] = useState("")

    // console.log(params);

    const estatico = useContext(Context)
    console.log(estatico);
    
    const {gifs} = useContext(GifsContextProvider)
    console.log(gifs);

    useEffect(() => {
      fetch(`${API_URL}${id}?${API_KEY}`)
      .then(respuesta => respuesta.json())
      .then(resp => {
        setUrlImagen(resp.data.images.downsized.url)
      })
    }, [])
    

    return (
        <div className='detailContainer'>
            <h1>Gif con id: {id}</h1>
            <img className='imagenDetalle' alt="imagen" src={urlImagen}/>
        </div>
    )

}