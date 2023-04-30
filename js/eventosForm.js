const inputCodigo = document.querySelector("#inputCodigo")
const inputNombre = document.querySelector("#inputNombre")
const inputtramite = document.querySelector("#inputtramite")
const formulario = document.querySelector("form")

const crearID = ()=> parseInt(Math.random() * 9_000 + 1000) //Genero un ID aleatorio

recuperoStorage() //si existe un array en LS, lo recupero y almaceno en la constante 

function limpiarCampos() {
    inputCodigo.value = ""
    inputNombre.value = ""
    inputtramite.value = ""
}


function guardarpractica() {
    inputCodigo.value = crearID()
    let nuevaPractica = {id: inputCodigo.value, nombre: inputNombre.value, tramite: inputtramite.value}
    practica1.push(nuevaPractica)
        alert("✅ Se ha guardado una nueva practica.")
        console.clear()
        console.table(practica1)
        limpiarCampos()
        actualizoStorage()
}

formulario.addEventListener("submit", (e)=> {
   e.preventDefault()
    guardarpractica()
})