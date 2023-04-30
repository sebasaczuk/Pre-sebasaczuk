//Escucho el form credenciales en el html, traigo la info de los campos y valido con un IF/ELSE
credenciales.addEventListener('submit', function(event) {
    let login = true
    event.preventDefault()
    while (login === true) {
    usuario = document.getElementById('username').value
    passwd = document.getElementById('password').value
    
    if (usuario === "sebas" && passwd === "lucas") {
        alert("✅ Bienvenido al backend de Turnos!")
        login = false
        location.href = 'm_agenda.html' 
   } else {
        alert("⛔️ No se reconoce usuario y/o contraseña.")
        break
    }}
})
