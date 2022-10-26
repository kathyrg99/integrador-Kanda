import { Producto } from "./classProducto.js";
import { arrayCarrito, arrayProductos, input, linkCategorias, sectionProductos } from "./variables.js";

//funciones

export const getRequest = async () =>{
    let req = await fetch("/productos.json",)

    let response = await req.json();
    console.log(response)

    for (const el of response) {
        arrayProductos.push(el)
    }
    localStorage.setItem("arrayProductos", JSON.stringify(arrayProductos))
}

export const generarCards = (array) =>{
    array.forEach( element => {
        let {imagen, nombre, descripcion, precio, id, categoria} = element;
        sectionProductos.innerHTML += `
                <div class="card" style="width: 18em;">
                <a class="img-card" href="/pages/detail.html"><img src=${imagen} class="card-img-top" alt=""></a>
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
    })
    
}

export const eventoAgregarProducto = () =>{
    let btns = document.querySelectorAll(".btn-card")
    for (const btn of btns) {
        btn.addEventListener("click", (event) =>{ 
            let id = event.target.attributes[1].value;
            let existe = arrayCarrito.findIndex(  el => el.id == id)
            //console.log(existe);
            if ( existe != -1) {
                //si existe le sumamos uno a la cantidad
                let producto = arrayCarrito[existe]
                //console.log("entré al if");
                producto.sumarCantidad()
               //console.log(arrayCarrito);
            }
            else{ //instanciar la clase
                //console.log("entré al else");
            // consulta en el array de productos y encuentra la coincidencia
            let resultado = arrayProductos.find(el => el.id == id);
            //console.log(resultado);
            let producto = new Producto(resultado.nombre, resultado.precio, resultado.imagen, resultado.id, resultado.descripcion)
            producto.sumarCantidad()
            arrayCarrito.push(producto)
            }
            
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: false,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
                })
                Toast.fire({
                icon: 'success',
                title: 'Agregado al carrito'
                })

            localStorage.setItem("carrito", JSON.stringify(arrayCarrito))

            /* cuando se agrega algo al carrito muestra el punto rosa */
            document.getElementById("point").style.visibility = 'visible'
        })
        
    }
}

export const eventoInput = () =>{
    input.addEventListener("input", (event) =>{
        //console.log(event.target.value);
        sectionProductos.innerHTML = ""
        let resultado = arrayProductos.filter(el => el.nombre.toLowerCase().includes(event.target.value.toLowerCase()));
        console.log(resultado);
        if(resultado.length > 0 ){
            generarCards(resultado)
        }else{
            sectionProductos.innerHTML = `<h4 class="noResult">No se encontraron resultados</h4>`
        }
        
    })
}

export const eventoCategoria = () => {
    for (const link of linkCategorias) {
        link.addEventListener("click", (event) =>{
            event.preventDefault()
            let categoriaProducto = event.target.textContent.toLowerCase();

            localStorage.setItem("arrayProductos", JSON.stringify(arrayProductos))
            localStorage.setItem("categoria", categoriaProducto)

            window.location = "./pages/categorias.html"
        })
        
    }
}  

export const generarCarrito = (array) =>{
    array.forEach( element => {
        let {imagen, nombre, descripcion, cantidad, precio, id} = element;
        sectionProductos.innerHTML += `
        <section class="h-100" style="background-color: E6EFEE;" id=${id}>
        <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-10">
    
                    <div class="card rounded-3">
                        <div class="card-body p-4">
                            <div class="row d-flex justify-content-between align-items-center">
                                <div class="col-md-2 col-lg-2 col-xl-2">
                                    <img src=${imagen}
                                        class="img-fluid rounded-3" alt="image">
                                </div>
                                <div class="col-md-3 col-lg-3 col-xl-3">
                                    <p class="lead fw-normal">${nombre}</p>
                                    <p><span class="text-muted">${descripcion}</span>
                                    </p>
                                </div>
                                <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                                    <button  class="btn restarCantidad px-2" onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                        <i class="fas fa-minus"></i>
                                    </button>
    
                                    <input id="form1" min="0" name="quantity" value=${cantidad} type="number"
                                        class="form-control form-control-sm" />
    
                                    <button  class="btn sumarCantidad px-2" onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                        <i class="fas fa-plus"></i>
                                    </button>
                                </div>
                                <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                    <h5 class="mb-0">$${precio}</h5>
                                </div>
                                <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                                    <a href="#!" id="eliminar" class="text-danger"><i class="fas fa-trash fa-lg"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
        `
        sumarCantidad()
        restarCantidad()
        //eliminarProducto()
    });
}

export const sumarCantidad = () =>{
    let btns = document.querySelectorAll(".sumarCantidad")

    for (const btn of btns) {
        btn.addEventListener("click", (event) => {
            console.log("sumar 1");
            //console.log(event.target.parentNode.id);
            /* let busqueda = arrayCarrito.findIndex( el => el.id == event.target.parentNode.id)
            console.log(busqueda);
            arrayCarrito[busqueda].sumarCantidad()
            console.log(arrayCarrito);
            localStorage.setItem("carrito",JSON.stringify(arrayCarrito))
            generarCarrito(JSON.parse(localStorage.getItem("carrito"))) */
        }) 
    }
    
}

const restarCantidad = () =>{
    let btns = document.querySelectorAll(".restarCantidad");

    for (const btn of btns) {
        btn.addEventListener("click", (event) => {
            console.dir(event.target.parentNode);

            /* let busqueda = arrayCarrito.findIndex( el => el.id == event.target.paraNode.id)
            arrayCarrito[busqueda].
            localStorage.setItem("carrito", JSON.stringify(arrayCarrito))
            generarHtml(JSON.parse(localStorage.getItem("carrito"))) */
        } )
    }
    
}

/* const eliminarProducto = () =>{
    let btns = document.querySelectorAll(".text-danger");
    for (const btn of btns) {
        btn.addEventListener("click", (evento)=>{
            let element = evento.target.parentNode.id
            element.remove()
        })
    }
} */



/* genera boton Finalizar Compra */
export const generarBotones =  ()=>{
    let btnFinalizar = document.querySelector("#btn-finalizarCompra")
    btnFinalizar.innerHTML += `
            <div class="container h-100 py-0">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-10">
                        <div class="card">
                            <div class="card-body">
                                <button id="btnFinalizar" type="button" class="btn btn-cart  btn-lg">Finalizar compra</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    `
    eventoFinalizarCompra()

}


export const eventoFinalizarCompra = () =>{

    const resultado = arrayCarrito.reduce( (acumulador, el ) => acumulador + Number(el.precio) * Number(el.cantidad), 0)

    document.querySelector("#btnFinalizar")
    .addEventListener("click",()=>{
        Swal.fire({
            icon: 'success',
            title: 'Gracias por su compra',
            text: `El importe total de su compra es: $${resultado}`,
            confirmButtonText: 'Aceptar',
        })
        .then(resultado => {
            if (resultado.value) {
                localStorage.clear("carrito");
                window.location = "../index.html"
            }
        });

    })
    
}


export const generarTotal = (array)=> {

    const resultado = array.reduce( (acumulador, el ) => acumulador + Number(el.precio) * Number(el.cantidad), 0)

        document.querySelector("#totalCompra").innerHTML += `
        <div class="container h-100 py-0">
        <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-10">
                <div class="card">
                    <div class="card-body ">
                        <h5 class="mb-0 d-flex justify-content-end">Total: $${resultado}</h5>
                    </div>
                </div>
            </div>
        </div>
        </div>
    `
}




//agregar el detail
/* 
export const eventoDetail = () =>{
    let images = document.querySelectorAll("mg-card");
    for (const img of images) {
    img.addEventListener("click", ()=>{
        window.location = "/pages/detail.html"
        console.log("estoy en el detail"); 
        generarCards(array)
    })
}
} */



