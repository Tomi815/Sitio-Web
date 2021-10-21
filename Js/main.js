//Arrays (Ejercicio)
alert("Mirá la lista de nuestros productos!!")
const misProductos = [{ id: 1, producto: "Pizza Mozzarella"},
                  { id: 2,  producto: "Pizza Napolitana"},
                  { id: 3,  producto: "Pizza Fugazzetta"},
                  { id: 4, producto: "Pizza Calabresa"},
                  { id: 5,  producto: "Pizza con Jamon y Morron"},
                  { id: 6,  producto: "Pizza Carbonara"},
                  { id: 7, producto: "Pizza Pollo y Beacon"},
                  { id: 8,  producto: "Pizza con Sardinas"},
                  { id: 9,  producto: "Pizza Cuatro Quesos"}];

for (const producto of misProductos) {
    alert(producto.id + " " + producto.producto);
}
//Buscar un Producto
const buscarProducto = misProductos.find(producto => producto.id === 2);
console.log(buscarProducto);

// //Producto Pizzas
// function productoPizza(gustos, tamaño, tipoDeHarina) {
//     this.gustos = gustos;
//     this.tamaño = tamaño;
//     this.tipoDeHarina = tipoDeHarina;
//     this.informar = function () { alert("Tus gustos elegidos son: " + this.gustos + ". " + "El tamaño que elegiste es: " + this.tamaño  + ". " + "La harina que elegiste es: " + this.tipoDeHarina); }
// }

// let gustos = prompt("Ingrese los gustos para su Pizza!");
// let tamaño = prompt("Elija el tamaño que desee.");
// let tipoDeHarina = prompt("Ingrese el tipo de harina para la Elaboracion.");
// const miPizza = new productoPizza(gustos, tamaño, tipoDeHarina);
// miPizza.informar();


