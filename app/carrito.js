import { generarBotones, generarCarrito, generarTotal} from "./funciones.js";
import { arrayCarrito } from "./variables.js";



let contenedorProductos = document.querySelector("#contenedorProductos")


    const generarHtml = () => {
        //let array = carrito.productos;
        
        if(arrayCarrito.length > 0){
        generarCarrito(arrayCarrito) 
        generarTotal(arrayCarrito)
        generarBotones()

        }
        else{
            contenedorProductos.innerHTML = `<h3 class="noResult"> El carrito está vacío </h3>`
        }
        
        
    }
    

    generarHtml()
    







