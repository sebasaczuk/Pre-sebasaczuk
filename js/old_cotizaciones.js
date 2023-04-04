//Cotizador de estudios y practicas, primera entrega curso Coder. Sebastian Saczuk.
let consulta = confirm("¿Te puedo ayudar a cotizar tu practica?")
if (consulta === false) {
    location.href = "../index.html"
}

if (consulta === true) {
    //Selecciono la practica y cantidad
    let cantidad = prompt("¿Cuantas personas se realizaran la practica a cotizar?")
    let estudio = prompt("Ingresa la practica a cotizar de forma particular").toLowerCase()
        switch(estudio) {
        case "radiografias":
            costos1 = (100 * cantidad)
        calcularImporteFinal()  
        location.href = "../index.html"
        //cotizo Radiografias
            break
        case "tomografias":
            costos1 = (200 * cantidad)
        calcularImporteFinal()
        location.href = "../index.html"
        //cotizo Tomografias
            break
        case "extracciones":
            costos1 = (300 * cantidad)
        calcularImporteFinal()
        location.href = "../index.html"
        //cotizo Extracciones
            break
        case "resonancias":
            costos1 = (400 * cantidad)
        calcularImporteFinal()
        location.href = "../index.html"
        //cotizo extracciones
            break
        default:
            //sino hago el estudio...
        alert("⛔ No realizamos el estudio/practica", estudio)
        location.href = "../index.html"
        }  
}
