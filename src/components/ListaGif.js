import Gif from './Gif';
import './ListaGif.css'
import useGifs from '../hooks/useGifs';
import { useRef, useEffect } from 'react';

export default function ListaGif({params}) {

  const elementRef = useRef()

  const {keyword} = params
  const {loading, gifs, setPage} = useGifs({keyword})
  
  
  if (loading) return <i>Cargando...</i>
  console.log(gifs);
  
  const handleNextPage = () => setPage(paginaPrevia => paginaPrevia + 1)

  return (
    <div className="gifs">
          <div className="gifs-content">
            {gifs.map(i => 
              <Gif 
                id={i.id}
                key={i.id} //la key debe ser un identificador unico
                title={i.title} 
                url={i.url} 
              />)}
            
          </div>
          <button onClick={handleNextPage}>Ver más</button>
        </div>
  )
}
