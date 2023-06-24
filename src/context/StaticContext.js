import React from "react";

const Context = React.createContext({
    //esto es sin provider
    name: 'maira', 
    creandoMiPage: true
}) 
// creo este objeto como valor inicial del contexto

export default Context