import React, {useContext, useEffect, useState} from 'react'
import Context from '../context/StaticContext';
import GifsContextProvider from '../context/GifsContext';
import './Detail.css'
import { API_KEY, API_URL } from '../services/Setting';

export default function Detail ({params}) {
    const {id} = params
    const [urlImagen, setUrlImagen] = useState("")
    const [title, setTitle] = useState("")

    console.log(params);

    const estatico = useContext(Context)
    // console.log(estatico);
    
    const {gifs} = useContext(GifsContextProvider)
    // console.log(gifs);

    useEffect(() => {
      // fetch(`${API_URL}${id}?${API_KEY}`)
      fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=BAo8mj1IAGrHIsi7hOJXNW9i6zhopPBm`)
      .then(respuesta => respuesta.json())
      .then(resp => {
        console.log(resp);
        setUrlImagen(resp.data.images.downsized.url)
        setTitle(resp.data.title)
      })
    }, [])
    

    return (
        <div className='container'>
          <div className='detailContainer'>
            <div>
              <h1>{title}</h1>
              <h4>Gif con id: {id}</h4>
            </div>
            <div className='imagenContainer'>
              <img className='imagenDetalle' alt="imagen" src={urlImagen}/>
            </div>
          </div>
        </div>
    )

}