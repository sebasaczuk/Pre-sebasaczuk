//Cotizador de estudios y practicas, primera entrega curso Coder. Sebastian Saczuk.
let consulta = confirm("¿Te puedo ayudar a cotizar tu practica?")
if (consulta === false) {
    location.href = "../index.html"
}

if (consulta === true) {
    //Selecciono la practica
    let estudio = prompt("Ingresa la practica a cotizar de forma particular").toLowerCase()
    switch(estudio) {
        case "radiografias":
            costos1 = 100
        calcularImporteFinal()  
        location.href = "../index.html"
        //cotizo Radiografias
            break
        case "tomografias":
            costos1 = 200
        calcularImporteFinal()
        location.href = "../index.html"
        //cotizo Tomografias
            break
        case "extracciones":
            costos1 = 300
        calcularImporteFinal()
        location.href = "../index.html"
        //cotizo Extracciones
            break
        case "resonancias":
            costos1 = 400
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
