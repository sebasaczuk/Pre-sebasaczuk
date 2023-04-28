const practica1 = []


//Guardo en webstorage
function actualizoStorage() {
   if (practica1.length > 0) {
      localStorage.setItem("practica1", JSON.stringify(practica1))
    }
 }

//Con esto recupero lo guardado en localstorage, y lo cargo
//en la constante practica1.
function recuperoStorage() {
    let practica1String = localStorage.getItem("practica1")
    if (practica1String !== null) {
        const practica1DeStorage = JSON.parse(practica1String)
        practica1.push(...practica1DeStorage) //SPREAD
    }
}