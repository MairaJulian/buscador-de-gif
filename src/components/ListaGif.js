import React, { useEffect, useState } from 'react'
import Api from '../services/Api';
import Gif from './Gif';


export default function ListaGif() {

    const [gifs, setGifs] = useState([])

  useEffect(() => {
    Api({ keyword: "autos bmw"}).then(lista => setGifs(lista))
    
  }, [])
  console.log(gifs);

  return (
    <div className="App">

          <section className="App-content">
            {gifs.map(i => 
              <Gif 
                id={i.id}
                key={i.id} //la key debe ser un identificador unico
                title={i.title} 
                url={i.url} 
              />)}
          </section>
          
        </div>
  )
}
