export class Producto {
    constructor(nombre, precio, imagen, id, descripcion){

        this.nombre = nombre,
        this.precio = precio,
        this.imagen = imagen,
        this.id = id,
        this.cantidad = 1, 
        this.descripcion = descripcion
    }

    //metodos sumar cantidad: cada vez que se ejecute este metodo va a sumar uno en la cantidad.

    sumarCantidad(){
        return this.cantidad++
    }
    //restarCantidad(){}
}

