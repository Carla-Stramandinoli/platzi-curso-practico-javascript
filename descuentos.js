//const precioOriginal = 120;
//const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    console.log(porcentajePrecioConDescuento);
    console.log(precio);
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    console.log(precioConDescuento);
    
    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const inputDiscount = document.getElementById("InputDiscount");
    const DiscountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, DiscountValue);

    const resultP = document.getElementById("ResultPriceDiscount");
    resultP.innerText = "El precio con descuento son : $" + precioConDescuento;
}

/** TENGO QUE ACEPTAR COMO COUPON SOLO UNO QUE ESTE DENTRO DE LA LISTA POSIBLE DE MIS CUPONES , 
 * PAR QUE NO ME CAGUE , LA LISTA DE CUPONES YA ESTA DEFINIDA Y YO TENGO QUE COMPROBAR QUE SE USA UNO DE ESOS 
 * 
 * Y NO UNO FRULAS */

// Declaracion: Escribir el nombre de la variable, tipo y un posible valor inicial
// Asignacion: Otorgarle/Cambiar/Reemplazar el valor a una variable (siempre que haya un igual involucrado en la sentencia)
const cupones = [
    "Pepito",
    "JuanDC",
    "Firulais1",
];

function onClickButtonPriceCupon() {
    const inputPrice = document.getElementById("InputPrice");
    const precioValue = inputPrice.value;
    const inputCupon = document.getElementById("InputCupon");
    const precioCupon = inputCupon.value;

    let descuento;
    switch (precioCupon) {
        case cupones[0]:
            descuento = 10;
            break;
        case cupones[1]:
            descuento = 20;
            break;
        case cupones[2]:
            descuento = 30;
            break;
    }
console.log(descuento);
    const precioConCupon = calcularPrecioConDescuento(precioValue, descuento);
    const resultP = document.getElementById("ResultPriceCupon");
    resultP.innerText = "El precio con cupon de descuento son : $" + precioConCupon;
}

/* function calcularPrecioConCupon(precio, cupon){
    const porcentajeConCupon = 100 - cupon;
    const precioConDescuento = (precio * porcentajeConCupon) /100;

    return precioConDescuento;
}



    const precioConCupon = calcularPrecioConDescuento(priceValue, cuponValue);
    const resultP = document.getElementById("ResultPriceCupon");
    resultP.innerText = "El precio con cupon de descuento son : $" + precioConCupon;
} */
//console.log({
//    precioOriginal, 
//    descuento,
//    porcentajePrecioConDescuento,
//    precioConDescuento,
//});
