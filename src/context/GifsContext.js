import React, { useState } from "react";

const Context2 = React.createContext({})

export function GifsContextProvider ({children}) {
    const [gifs, setGifs] = useState([])

    return <Context2.Provider value={{gifs, setGifs}}>
        {children}
    </Context2.Provider>
}

export default Context2