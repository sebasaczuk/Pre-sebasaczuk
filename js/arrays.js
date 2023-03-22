function agregarEstudio() {
    let nuevoEstudio = prompt("Ingresa el nuevo estudio/practica:")
    let resultado = estudios.includes(nuevoEstudio)
    if (resultado === false) {
        estudios.push(nuevoEstudio) 
        listarEstudioHTML()
    } else {
        alert("⛔ No se puede agregar, el estudio o practica ya existe en el listado.")
    }
}
function quitarEstudio() {
    let estudioAQuitar = prompt("Ingrese el estudio/practica a quitar del listado:")
    let indice = estudios.indexOf(estudioAQuitar) 
    if (indice > -1) {
        estudios.splice(indice, 1)
        listarEstudioHTML()    
    } else {
        alert("⛔ No se encontró el elemento indicado.")
    }
}
function buscarEstudio() {
    let estudioABuscar = prompt("Ingrese el estudio/practica que desee buscar:")
    let indice = estudios.indexOf(estudioABuscar) 
    if (indice > -1) {
        alert("✅ El estudio/practica existe en el listado")
    } else {
        alert("⛔ No se encontro el estudio/practica indicado")
    }
}
function listarEstudioHTML() {
    const listado = document.querySelector("ol")
        listado.innerHTML = ""
        for (estudio of estudios)
            listado.innerHTML += `<li>${estudio}</li>`
}
listarEstudioHTML()