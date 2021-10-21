//Objetos Con JavaScript
function productoPizza(gustos, tamaño, tipoDeHarina) {
    this.gustos = gustos;
    this.tamaño = tamaño;
    this.tipoDeHarina = tipoDeHarina;
    this.informar = function () { alert("Tus ingredientes elegidos son: " + this.gustos + ". " + "El tamaño que elegiste es: " + this.tamaño  + ". " + "La harina que elegiste es: " + this.tipoDeHarina); }
}

let gustos = prompt("Elija los ingredientes para su Pizza!");
let tamaño = prompt("Ingrese el tamaño que desee.");
let tipoDeHarina = prompt("Ingrese el tipo de harina para la Elaboracion.");
const miPizza = new productoPizza(gustos, tamaño, tipoDeHarina);
miPizza.informar();
