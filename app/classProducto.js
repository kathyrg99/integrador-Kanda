export class Producto {
    constructor(imagen, nombre, precio, id,){
        this.nombre = nombre,
        this.precio = precio,
        this.imagen = imagen,
        this.id = id
        this.cantidad = 1
    }

    //metodos sumar cantidad: cada vez que se ejecute este metodo va a sumar uno en la cantidad.

    sumarCantidad(){
        return this.cantidad++
    }
    //restarCantidad(){}
}