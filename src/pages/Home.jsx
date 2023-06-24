import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'wouter'
import useGifs from '../hooks/useGifs'
import Gif from '../components/Gif'
import Trending from '../services/Trending'
import './Home.css'

function Home() {
  
  const [keyword, setKeyword] = useState('')
  const [path, location] = useLocation()
  const {loading, gifs} = useGifs({keyword})
  const [trends, setTrends] = useState([])
  const [show, setShow] = useState(false)
  const elementRef = useRef()

  const handleSubmit = evt => {
    evt.preventDefault() 
    location(`/search/${keyword}`)
  }

  const handleChange = evt => {
    setKeyword(evt.target.value)
  }

  useEffect(() => {
    Trending().then((datos) => (setTrends(datos)))
}, [])

  useEffect(() => {
    const onChange = (entries, observer) => {
      const el = entries[0]
      if (el.isIntersecting) {
        setShow(true)
      }
    }

    const observer = new IntersectionObserver(onChange, {
      rootMargin: '100px'
    })

    observer.observe(elementRef.current)
  }, [])
  

  return (
    <div className='home'>
        <form onSubmit={handleSubmit}>
          <input 
            placeholder='Busca tu gif aquí...' 
            onChange={handleChange} 
            type='text' 
            value={keyword}
            className='input'
          />
        </form>

        {
            show ? 
            <div>
              <h1>Trending</h1>
              <section className="Home-content">
                {trends.map(i => 
                  <Gif 
                    id={i.id}
                    key={i.id}
                    title={i.title} 
                    url={i.url} 
                  />)}
              </section>
            </div> : null
        }
        <div ref={elementRef}>
          .
        </div>
        
    </div>
  )
}

export default React.memo(Home)
