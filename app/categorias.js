import { generarCards } from "./funciones.js";
import { arrayProductos, categoria } from "./variables.js";


let busqueda; 
switch(categoria){
    case "dulces":
    busqueda = arrayProductos.filter( el => el.categoria == "dulces")
        generarCards(busqueda)
    break;

    case "budines":
    busqueda = arrayProductos.filter( el => el.categoria == "budines")
    generarCards(busqueda)
    break;

    case "cookies":
    busqueda = arrayProductos.filter( el => el.categoria == "cookies")
    generarCards(busqueda)
    break;

    case "pastafrolas":
    busqueda = arrayProductos.filter( el => el.categoria == "pastafrolas")
    generarCards(busqueda)
    break;

    default:
        break;
}

