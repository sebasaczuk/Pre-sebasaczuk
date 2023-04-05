let login = true

 while (login === true) {
    usuario = prompt("Ingresa tu nombre:")
   passwd = prompt("Ingresa tu contraseña:")

    if (usuario === "sebas" && passwd === "lucas") {
        alert("✅ Bienvenido a la central de Resultados!")
        login = false
        location.href = 'resultados1.html' 
   } else {
        alert("⛔️ No se reconoce usuario y/o contraseña.")
    }
}
