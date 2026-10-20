function calcularPrecio(base, descuento) {
    let precioFinal = base;
    if (descuento) {
        precioFinal = base - base * descuento;
    }
    return precioFinal.toFixed(2);
}

console.log(calcularPrecio(100, 0.2));
console.log(calcularPrecio(100, 60));