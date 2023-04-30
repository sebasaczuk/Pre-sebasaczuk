//Me conecto a la API y creo una constante "endpoint". 
const endpoint = 'https://644c37984bdbc0cc3aa4e2c6.mockapi.io/tasks'

managebutton.addEventListener("click", ()=> location.href = 'login_agenda.html') 

//Recupero la info de los elementos del form y mando la data a la API.
function addTask() {
    const name = document.getElementById('name').value
    const date = document.getElementById('date').value
    const description = document.getElementById('description').value
  
    fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify({ name, date, description }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      const tasks = document.getElementById('tasks')
      const taskItem = document.createElement('li')
      taskItem.innerHTML = `${data.description}`
      tasks.appendChild(taskItem);
      alert("✅ Solicitud Registrada con Exito!")
    })
    .catch(error => console.error(error))
  }

  fetch(endpoint)
  .then(response => response.json())
  .then(data => {
    const tasks = document.getElementById('tasks')
    data.forEach(task => {
      const taskItem = document.createElement('li')
      taskItem.innerHTML = `${task.description}`
      tasks.appendChild(taskItem)
    });
  })
  .catch(error => console.error(error))
 