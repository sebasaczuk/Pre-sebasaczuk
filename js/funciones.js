function calcularPrecioConIVA(importe) {
    if (typeof importe === 'number') {
        let resultado = importe * IVA
            return resultado.toFixed(2)
    } else {
        return '⛔️ Se espera un valor numérico como parámetro.'
    }
}

function calcularImporteFinal() {
    let numero = parseFloat(costos1)
    if (typeof numero === 'number') {
        let resultado = calcularPrecioConIVA(numero)
        alert("El costo de la practica/estudios es de $ " + numero + ", con IVA (final) el importe es de $ " + resultado)
    }
}

