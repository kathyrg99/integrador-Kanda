import { Producto } from "./classProducto.js";
import { arrayCarrito, arrayProductos } from "./variables.js";


export const eventoAgregarProducto = () =>{
    let btns = document.querySelectorAll(".btn-card")
    for (const btn of btns) {
        btn.addEventListener("click", (event) =>{ 
            let id = event.target.attributes[1].value;
            console.log(id);
            let existe = arrayCarrito.findIndex(  el => el.id == id)
            console.log(existe);
            if ( existe != -1) {
                console.log("entré al if");
                //si existe le sumamos uno a la cantidad
                let producto = arrayCarrito[existe]
                producto.sumarCantidad()
                console.log(arrayCarrito);
            }
            else{ //instanciar la clase
                console.log("entré al else");
            // consulta en el array de productos y encuentra la coincidencia
            let resultado = arrayProductos.find(el => el.id == id);
            //console.log(resultado);
            let producto = new Producto(resultado.nombre, resultado.precio, resultado.imagen, resultado.id)
            producto.sumarCantidad()
            arrayCarrito.push(producto)
            console.log(arrayCarrito);
            }

            localStorage.setItem("carrito", JSON.stringify(arrayCarrito))
        })
        
    }
}


