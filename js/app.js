const selectPropiedad = document.querySelector("select#practica2")
const inputPersonas4 = document.querySelector("input#personas4")
const btnCotizar = document.querySelector("button.button.button-outline")
const valorPractica = document.querySelector("span#valorPractica")
const btnCheckout = document.querySelector("button.btn-checkout")

// Cargo los comboselect
function cargarCombo(select, array) {
    if (array.length > 0) {
        array.forEach(element => {
            select.innerHTML += `<option value="${element.factor}">${element.tipo}</option>`
        });
    }
}
cargarCombo(selectPropiedad, datosPropiedad)

function validoDatosCompletos() {
    return (selectPropiedad.value !== "..." && parseInt(inputPersonas4.value) >= 01 && parseInt(inputPersonas4.value) <= 10)
}

function realizarCotizacion() {
    if (validoDatosCompletos()) {
        const cotizo = new Cotizador(inputPersonas4.value, selectPropiedad.value, IVA)
        valorPractica.textContent = cotizo.cotizar()
    } else {
        alert("⛔️ Algunos de los valores ingresados son incorrectos.")
    }
}

btnCotizar.addEventListener("click", ()=> {
    realizarCotizacion()
})
