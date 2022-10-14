import { Producto } from "./app/classProducto.js";
import { eventoAgregarProducto } from "./app/eventos.js";
import { generarCards, getRequest } from "./app/funciones.js";
import { arrayCarrito, arrayProductos, input, linkCategorias, sectionProductos } from "./app/variables.js";



eventoAgregarProducto()

input.addEventListener("input", (event) =>{
    //console.log(event.target.value);
    sectionProductos.innerHTML = ""
    let resultado = arrayProductos.filter(el => el.nombre.toLowerCase().includes(event.target.value.toLowerCase()));
    console.log(resultado);
    if(resultado.length > 0 ){
        generarCards(resultado)
    }else{
        sectionProductos.innerHTML = `<h3>No se encontraron resultados</h3>`
    }
    
})


for (const link of linkCategorias) {
    link.addEventListener("click", (event) =>{
        event.preventDefault()
        let categoriaProducto = event.target.textContent.toLowerCase();
        localStorage.setItem("arrayProductos", JSON.stringify(arrayProductos))
        console.log(categoriaProducto);
        localStorage.setItem("categoria", categoriaProducto)
        window.location = "./pages/productos.html"
    })
    
}

//programa
document.addEventListener("DOMContentLoaded", getRequest)
generarCards(arrayProductos)
