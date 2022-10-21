import { arrayCarrito, arrayProductos } from "./variables.js"

import { eventoFinalizarCompra, generarBotones, generarCarrito, generarTotal} from "./funciones.js";
//import { arrayProductos } from "./variables.js";



let contenedorProductos = document.querySelector("#contenedorProductos")



export let carrito = {
    productos: JSON.parse(localStorage.getItem("carrito")),

    
    total: () => {
        //logica para calcular el total
        generarTotal(carrito.productos)
    },

    generarHtml: () => {
        let array = carrito.productos;
        console.log(array);
        
        if(array.length > 0){
        generarCarrito(array)
        generarBotones()
        }
        else{
            
        }
        
        /* esto no andaaaaa */
        
    }
    

}

//console.log(carrito.total);
carrito.total()
carrito.generarHtml()



/* esto estaba asi
total: () => {
        //logica para calcular el total
        generarTotal()
    },
*/


/* esto estaba asi
if (array.length > 0) {
    //generarCarrito(array)
    //generarBotones()
}else  if(array.length = 0) {
    contenedorProductos.innerHTML += `<h3>El carrito está vacio</h3>`
    
} 
*/