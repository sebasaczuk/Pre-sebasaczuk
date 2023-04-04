const inputSearch = document.querySelector("#inputSearch")
const tbody = document.querySelector("tbody")
const btnNuevo = document.querySelector(".button.button-outline")

const retornoTablaHTML = (prod)=> {
    return `<tr>
                <td>${prod.id}</td>
                <td>${prod.nombre}</td>
                <td>${prod.tramite}</td>
            </tr>`
}

const cargarPracticas = (array)=> {
    let tabla = ""
    if (array.length > 0) {
        array.forEach(prod => {
            tabla += retornoTablaHTML(prod)
        })
        tbody.innerHTML = tabla
    }
}
recuperoStorage()
cargarPracticas(practica1) //Cargo practicas al iniciar

//Manejo el filtro 
const filtrarPracticas = (filtro)=> {
    let resultado = practica1.filter((practica1) => practica1.nombre.includes(filtro.trim()))
        if (resultado.length > 0) {
            cargarPracticas(resultado)
        }
}
inputSearch.addEventListener("search", ()=> filtrarPracticas(inputSearch.value))

//Voy a la web de carga
btnNuevo.addEventListener("click", ()=> location.href = 'nuevapractica.html')