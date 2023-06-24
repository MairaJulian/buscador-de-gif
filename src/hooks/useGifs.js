import { useEffect, useState } from "react"
import Api from './../services/Api';

const PAGINA_INICIAL = 0

export default function useGifs ({keyword} = {keyword: null}) {

    const [loading, setLoading] = useState(false)
    const [gifs, setGifs] = useState([])
    const [page, setPage] = useState(PAGINA_INICIAL)
    
    //recuperamos keyword del localStorage
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

    useEffect(() => {
        setLoading(true)

        Api({ keyword: keywordToUse}).then(lista => {
        setGifs(lista)
        setLoading(false)

        if (keyword) localStorage.setItem('lastKeyword', keyword)
        //guardamos la keyword en el localStorage
        }) 
        
    }, [keyword, keywordToUse])

    useEffect(() => {
      if (page === PAGINA_INICIAL) return

      Api({keyword: keywordToUse, page}).then(proximosGifs => {
        setGifs(gifsPrevios => gifsPrevios.concat(proximosGifs))
      })
    }, [page, keywordToUse])
    

    return {loading, gifs, setPage}
}