const apiKey = "BAo8mj1IAGrHIsi7hOJXNW9i6zhopPBm"


export default function Api({keyword = "Morty"} = {}) {
  
  const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=15&offset=0&rating=g&lang=en`

    return fetch(API_URL)
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
