// Lote de transacciones que llega de la API (mezcla tipos de datos de forma incorrecta)
let transacciones = ["100.50", "200.00", "ERROR_RECHAZADO", "50.25", "abc", "N/A", "9999.99", "10.00"];
let saldoTotal = 0;


console.log("Iniciando auditoría de transacciones...");


for (let i = 0; i < transacciones.length; i++) {
    let transaccion = transacciones[i];


    // Bug 1: Controlar valores corruptos
    if (transaccion === "ERROR_RECHAZADO") {
        console.log("Transacción corrupta saltada.");
        continue;
    }


    // EXTRA: filtrar lo que no sea un número
    if (isNaN(transaccion)) {
        continue;
    }


    // Bug 2: Detener operaciones sospechosas (Alerta de fraude si supera 5000)
    if (transaccion > 5000) {
        console.log("¡Alerta de Fraude detectada! Cancelando proceso.");
        break;
    }


    // Bug 3: Coerción de tipos oculta
    saldoTotal += Number(transaccion);
}


console.log("Saldo total auditado: " + saldoTotal);