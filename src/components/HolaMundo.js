import React from "react";

export default function HolaMundo(){

const miFuncion = () =>{
    console.log("Mi Función");
}

    return ( // <> Fragments 
        <> /
            <h1>RETBOT</h1>
            <h2>Hola desde Fedora</h2>
        </>
    )
}

export function AdiosMundo(){
    return(
        <div>
            <h3>Adios</h3>
        </div>
    )

}