import { Producto } from "./classProducto.js";
import { eventoAgregarProducto } from "./eventos.js";
import { arrayCarrito, arrayProductos, sectionProductos } from "./variables.js";

//funciones

export const getRequest = async () =>{
    let req = await fetch("./productos.json",)

    let response = await req.json();
    console.log(response)

    for (const el of response) {
        arrayProductos.push(el)
    }
    localStorage.setItem("arrayProductos", JSON.stringify(arrayProductos))
    generarCards(arrayProductos);

}

export const generarCards = (array) =>{
    array.forEach( element => {
        let {imagen, nombre, descripcion, precio, id, categoria} = element;
        sectionProductos.innerHTML += `
                <div class="card" style="width: 18em;">
                    <img src=${imagen} class="card-img-top" alt="">
                <div class="card-body">
                <h5 class="card-title">${nombre}</h5>
                <p class="card-text">${descripcion}</p>
                <p class="card-precio">$${precio}</p>
                <p class="card-text">Categoría: ${categoria}</p>
                <div class="cont-boton">
                <button class="btn-card" data-id=${id}>Agregar al carrito </button>
                </div>
                </div>
                </div>
        `
        eventoAgregarProducto()
    });
}

