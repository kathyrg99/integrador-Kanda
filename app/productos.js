//import { Producto } from "./app/classProducto.js";


import { eventoAgregarProducto, eventoCategoria, eventoInput, generarCards, getRequest } from "./funciones.js"
import { arrayProductos, linkCategorias } from "./variables.js"


eventoAgregarProducto()

//programa
document.addEventListener("DOMContentLoaded", async () => {
    await getRequest()
    generarCards(arrayProductos)
    eventoInput()
    eventoCategoria()
})
