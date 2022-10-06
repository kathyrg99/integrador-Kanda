import { Producto } from "./app/classProducto.js";


//variables locales
let sectionProductos = document.querySelector("#contenedorProductos");
let input = document.querySelector(".busqueda")
console.log(input);
const arrayProductos = [];
const arrayCarrito = [];



//funciones
const getRequest = async () =>{
    let req = await fetch("https://63364e0965d1e8ef266ab394.mockapi.io/productos",)

    let response = await req.json();
    console.log(response)

    for (const el of response) {
        arrayProductos.push(el)
    }
    generarCards(arrayProductos);

}

const generarCards = (array) =>{
    array.forEach(element => {
        let {imagen, nombre, precio, id} = element;
        sectionProductos.innerHTML += `
                <div class="card" style="width: 18rem;">
                    <img src="" class="card-img-top" alt="">
                <div class="card-body">
                <h5 class="card-title">${nombre}</h5>
                <p class="card-text">$${precio}</p>
                <button class="btn btn-primary" data-id=${id}>agregar carrito</button>
                </div>
                </div>
        `
        eventoAgregarProducto()
    });
}

//eventos 

const eventoAgregarProducto = () =>{
    let btns = document.querySelectorAll(".btn-primary")
    for (const btn of btns) {
        btn.addEventListener("click", (event) =>{
            let id = event.target.attributes[1].value;
            // consulta en el array de productos y encuentra la coincidencia
            let resultado = arrayProductos.find(el => el.id == id);
            //console.log(resultado);
            let producto = new Producto(resultado.nombre, resultado.precio, resultado.imagen, resultado.id)
            arrayCarrito.push(producto)
            console.log(arrayCarrito);
            localStorage.setItem("carrito", JSON.stringify(arrayCarrito))
        })
        
    }
}

input.addEventListener("input", (event) =>{
    //console.log(event.target.value);
    let resultado = arrayProductos.filter(el => el.includes(event.target.value));
    console.log(resultado);
})



//programa
document.addEventListener("DOMContentLoaded", getRequest)
generarCards(arrayProductos)
