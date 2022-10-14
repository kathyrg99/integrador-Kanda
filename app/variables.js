export let sectionProductos = document.querySelector("#contenedorProductos");
export let input = document.querySelector(".busqueda")
console.log(input);
export let linkCategorias = document.querySelectorAll(".link-categoria")

export let arrayProductos = []
export const arrayCarrito = JSON.parse(localStorage.getItem("carrito")) || [];