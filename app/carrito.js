//import { arrayCarrito, arrayProductos } from "./variables.js"

import { generarBotones, generarCarrito, generarTotalCompra } from "./funciones.js";



let carrito = {
    productos: JSON.parse(localStorage.getItem("carrito")),

    total: () => {
        //logica para calcular el total
        let array = carrito.productos;
        let resultado = array.reduce( (acumulador, el ) => acumulador + Number(el.precio) * Number(el.cantidad), 0)
        console.log(resultado);
        /* let h2 = document.createElement("h2")
        h2.textContent = resultado; */

        //document.querySelector("#contenedorProductos").appendChild(h2)
    },

    generarHtml: () => {
        let array = carrito.productos;
       /*  for (const item of array) {
            document.querySelector("#contenedorCarrito")
            contenedorCarrito.innerHTML += `
            
            
            `
        } */
        generarCarrito(array)
        generarBotones()
    }
    

}

console.log(carrito.productos);
carrito.total()
carrito.generarHtml()






/* export const getRequest = async () =>{
    let req = await fetch("./productos.json",)

    let response = await req.json();
    console.log(response)

    for (const el of response) {
        arrayProductos.push(el)
    }
    localStorage.setItem("arrayProductos", JSON.stringify(arrayProductos))
    generarCarrito(arrayProductos);

} */

/* const generarCarrito = (array) =>{
    array.forEach( element => {
        let {imagen, nombre, descripcion, precio, categoria} = element;
        sectionProductos.innerHTML += `
        <section class="h-100" style="background-color: E6EFEE;">
        <div class="container h-100 py-5">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-10">
    
                    <div class="d-flex justify-content-center align-items-center mb-4">
                        <h3 class="fw-normal mb-0 text-black">Carrito</h3>
                    </div>
    
                    <div class="card rounded-3 mb-4">
                        <div class="card-body p-4">
                            <div class="row d-flex justify-content-between align-items-center">
                                <div class="col-md-2 col-lg-2 col-xl-2">
                                    <img src=${imagen}
                                        class="img-fluid rounded-3" alt="Cotton T-shirt">
                                </div>
                                <div class="col-md-3 col-lg-3 col-xl-3">
                                    <p class="lead fw-normal mb-2">${nombre}</p>
                                    <p><span class="text-muted">${descripcion}</span>
                                    </p>
                                </div>
                                <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                                    <button class="btn btn-link px-2"
                                        onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                        <i class="fas fa-minus"></i>
                                    </button>
    
                                    <input id="form1" min="0" name="quantity" value="2" type="number"
                                        class="form-control form-control-sm" />
    
                                    <button class="btn btn-link px-2"
                                        onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                        <i class="fas fa-plus"></i>
                                    </button>
                                </div>
                                <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                    <h5 class="mb-0">$${precio}</h5>
                                </div>
                                <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                                    <a href="#!" class="text-danger"><i class="fas fa-trash fa-lg"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    
    
                    <div class="card mb-4">
                        <div class="card-body p-4 d-flex flex-row">
                            <div class="form-outline flex-fill">
                                <input type="text" id="form1" class="form-control form-control-lg" />
                                <label class="form-label" for="form1">Código de descuento</label>
                            </div>
                            <button type="button" class="btn btn-aplicar btn-lg ms-3">Aplicar</button>
                        </div>
                    </div>
    
                    <div class="card">
                        <div class="card-body">
                            <button type="button" class="btn btn-cart  btn-lg">Finalizar compra</button>
                        </div>
                    </div>
    
                </div>
            </div>
        </div>

        </section>
        `

    });
} */
