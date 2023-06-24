
import {API_KEY, API_URL} from './Setting'


export default function Api({limit = 10, keyword = "Morty", page = 0} = {}) {
  
  const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=5&offset=${page * limit}&rating=g&lang=en`

    return fetch(apiURL)
    .then(respuesta => respuesta.json())
    .then(respTransformada => {
      const {data} = respTransformada
      const lista = data.map(i => {
        const {url} = i.images.downsized
        const {id, title} = i
        return {url, id, title}
    })
    
      return lista
    })
}
