//import { generarCards } from "./funciones.js";

import { generarCards } from "./funciones.js"
import { arrayProductos } from "./variables.js"

let contenedorDetail = document.querySelector("#contenedorDetail")

const generarHtmlDetail = ()=>{
    generarCards(arrayProductos)
}

generarHtmlDetail()

//pintar en el html cada card con el detalle