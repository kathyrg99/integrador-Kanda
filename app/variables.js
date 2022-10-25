export let sectionProductos = document.querySelector("#contenedorProductos");
export let input = document.querySelector(".busqueda")
export let linkCategorias = document.querySelectorAll(".link-categoria")



export const arrayProductos = []
export const arrayCarrito = JSON.parse(localStorage.getItem("carrito")) || [];

export let categoria = localStorage.getItem("categoria")
