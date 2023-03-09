let login = true

 while (login === true) {
    usuario = prompt("Ingresa tu nombre:")
   passwd = prompt("Ingresa tu contraseña:")

    if (usuario === "sebas" && passwd === "lucas") {
        alert("✅ Bienvenido a la central de Resultados!")
        login = false
        //break 
   } else {
        alert("⛔️ No se reconoce usuario y/o contraseña.")
    }
}
