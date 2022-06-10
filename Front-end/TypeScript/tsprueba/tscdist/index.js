"use strict";
const impuesto = 0;
const newUID = () => Math.random().toString(36).slice(2);
class Producto {
    constructor(nuevoProducto, precioProducto) {
        this.id = newUID();
        this.nombre = nuevoProducto;
        this.precio = precioProducto + precioProducto * impuesto;
        this.cantidad = 0;
    }
    listarProducto() {
        console.log(`\t || Nombre: ${this.nombre} \t|| Precio : ${this.precio} \t|| Cantidad : ${this.cantidad} ||`);
    }
}
class Factura {
    constructor() {
        this.Productos = [];
        this.idFactura = newUID();
        this.iva = 0.12;
        this.cantidad = 0;
        this.subTotal = 0;
        this.total = 0;
    }
    agregarProducto(producto, cantidadProducto) {
        if (this.productoExistente(producto.nombre, cantidadProducto)) {
            console.log("El producto ya existe en la factura y se agrego la cantidad adicional");
        }
        else {
            producto.cantidad = cantidadProducto;
            this.Productos.push(producto);
            console.log("El producto se agrego a la factura");
        }
    }
    productoExistente(nombreProduc, cantidad) {
        for (let producto of this.Productos) {
            if (producto.nombre === nombreProduc) {
                producto.cantidad += cantidad;
                return true;
            }
        }
        return false;
    }
    mostrarFactura() {
        console.log("Factura");
        for (let producto of this.Productos) {
            producto.listarProducto();
        }
    }
    totalFactura() {
        let subtotal = 0;
        for (let producto of this.Productos) {
            subtotal += producto.precio * producto.cantidad;
            producto.listarProducto();
            console.log(`\t\t\t\t\t\t\tEl Subtotal Producto ${producto.precio * producto.cantidad}`);
            console.log("----------------------------------------------------------------------------");
        }
        console.log(`El Subtotal de la factura \t\t\t\t\t\t= ${subtotal}`);
        this.subTotal = subtotal;
        this.total = subtotal + subtotal * this.iva;
        console.log(`El IVA ${this.iva} = \t\t\t\t\t\t \t${subtotal * this.iva}`);
        console.log(`El total de la factura = \t\t\t\t\t\t ${this.total} `);
    }
}
const factura = new Factura();
const producto1 = new Producto("Monitor", 20);
const producto2 = new Producto("Teclado", 40);
const producto3 = new Producto("Mouse", 10);
const producto4 = new Producto("Pantalla", 60);
console.log(".........................Agrego de productos............................\n");
factura.agregarProducto(producto1, 2);
factura.agregarProducto(producto1, 8);
factura.agregarProducto(producto2, 1);
factura.agregarProducto(producto3, 3);
factura.agregarProducto(producto4, 4);
console.log("\n.........................Factura de productos............................\n");
factura.totalFactura();
