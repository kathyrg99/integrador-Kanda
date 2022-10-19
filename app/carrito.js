//import { arrayCarrito, arrayProductos } from "./variables.js"

import { generarBotones, generarCarrito, generarTotal} from "./funciones.js";


let contenedorProductos = document.querySelector("#contenedorProductos")

export let carrito = {
    productos: JSON.parse(localStorage.getItem("carrito")),

    
    total: () => {
        //logica para calcular el total
        generarTotal()
    },

    generarHtml: () => {
        let array = carrito.productos;
        console.log(array);
        if (array.length > 0) {
            generarCarrito(array)
            generarBotones()
        }else /* if(array.length = 0) */{
            contenedorProductos.innerHTML += `<h3>El carrito está vacio</h3>`
            
        }
        /* esto no andaaaaa */
        
    }
    

}


carrito.total()
carrito.generarHtml()



/* esto estaba asi
total: () => {
        //logica para calcular el total
        generarTotal()
    },
*/