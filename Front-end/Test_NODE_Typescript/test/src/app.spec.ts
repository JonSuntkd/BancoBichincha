import {
  getLevel,
  suma,
  productoExistenteFactura,
  pExistenteFactura,
  Producto,
  Factura,
} from "./app";

describe("Functions Randoms", () => {
  test("Dede sumar [10] y [20] y devolver [30] funcion #suma", () => {
    //arranque
    const a = 10;
    const b = 20;
    const expected = 30;
    let result: number;

    //act
    result = suma(a, b);

    //assert
    expect(result).toBe(expected);
  });
  test("Devolver [Junior] en la funcion #getLevel [30] ", () => {
    //arranque
    const level = 30;
    const expected = "Junior";
    let result: string;

    //act

    result = getLevel(level);
    //assert
    expect(result).toBe(expected);
  });

  test("Se pretende devolver [true] si se encuentra el producto", () => {
    //arranque
    const producto1 = "Leche";
    const producto2 = "Leche";
    const expected = true;
    let result: boolean;

    //act
    result = productoExistenteFactura(producto1, producto2);

    //assert
    expect(result).toBe(expected);
  });
  test("Se pretende devolver [true] si se encuentra el producto en el arreglo", () => {
    //arranque
    const productos = ["Leche", "Queso", "Pan"];
    const produc = "Lech";
    const expected = true;
    let result: boolean;

    //act
    result = pExistenteFactura(productos, produc);

    //assert
    expect(result).toBe(expected);
  });
  test("Se pretende devolver [true] si se encuentra el producto en el arreglo de productos", () => {
    //arranque

    const factura = new Factura();
    const producto1 = new Producto("Monitor", 20);
    const producto2 = new Producto("Teclado", 40);
    const producto3 = new Producto("Mouse", 10);
    const producto4 = new Producto("Pantalla", 60);
    factura.agregarProducto(producto1, 2);
    factura.agregarProducto(producto1, 8);
    const product = "Monitor";
    const expected = true;
    let result: boolean;

    //act
    result = factura.productoExistente(product);

    //assert
    expect(result).toBe(expected);
  });
});
