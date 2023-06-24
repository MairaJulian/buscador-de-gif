
import {API_KEY, API_URL} from './Setting'


export default function Trending() {
  
  const apiURL = `${API_URL}/gifs/trending?api_key=${API_KEY}&limit=10&rating=g`

    return fetch(apiURL)
    .then(respuesta => respuesta.json())
    .then(respTransformada => {
      const {data} = respTransformada
      const listaTrending = data.map(i => {
        const {url} = i.images.downsized
        const {id, title} = i
        return {url, id, title}
    })
    console.log(listaTrending);
      return listaTrending
    })
}