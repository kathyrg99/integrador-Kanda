export let sectionProductos = document.querySelector("#contenedorProductos");
export let input = document.querySelector(".busqueda")
console.log(input);
export let linkCategorias = document.querySelectorAll(".link-categoria")



export let arrayProductos = JSON.parse(localStorage.getItem("arrayProductos")) || []
export const arrayCarrito = JSON.parse(localStorage.getItem("carrito")) || [];

export let categoria = localStorage.getItem("categoria")
console.log(categoria);