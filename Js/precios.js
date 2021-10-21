let pizza = prompt("Ingrese el nombre de su Pizza y te diremos el Precio! (f para cerrar) ");
while (pizza != "f"){
    switch (pizza) {
        case "jamon y queso":
            alert("La pizza de Jamon y Queso cuesta $350,00");
            break;
        case "mozzarella":
            alert("La pizza Mozzarella cuesta $350,00");
            break;
        case "fugazzetta":
            alert("La pizza de Fugazzetta cuesta $350,00");
            break;
        case "napolitana":
            alert("La pizza de Napolitana cuesta $350,00");
            break;
        case "calabresa":
            alert("La pizza de Calabresa cuesta $350,00");
            break;
        case "jamon y morron":
            alert("La pizza de Jamon y Morron cuesta $350,00");
            break;                        
        default:
            alert("No contamos con stock de " + pizza);
            break;
    }
    pizza = prompt("Ingrese otra Pizza! (f para cerrar)")
}