//Escucho el form credenciales en el html, traigo la info de los campos y valido con un IF/ELSE
credenciales.addEventListener('submit', function(event) {
    let login = true
    event.preventDefault()
    while (login === true) {
    usuario = document.getElementById('username').value
    passwd = document.getElementById('password').value
    
    if (usuario === "sebas" && passwd === "lucas") {
        alert("✅ Bienvenido a la central de Resultados!")
        login = false
        location.href = 'resultados1.html' 
   } else {
        alert("⛔️ No se reconoce usuario y/o contraseña.")
        break
    }}
})
