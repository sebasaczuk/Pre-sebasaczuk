const endpoint = 'https://644c37984bdbc0cc3aa4e2c6.mockapi.io/tasks';

function showTasks() {
  fetch(endpoint)
    .then(response => response.json())
    .then(data => {
      const tasks = document.getElementById('tasks');
      tasks.innerHTML = ''; // Limpiamos la lista de tareas antes de mostrarlas
      data.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `${task.name} - ${task.date} - ${task.description}`;

        const editButton = document.createElement('button');
        editButton.innerText = 'Editar';
        editButton.onclick = () => editTask(task.id, task.name, task.date, task.description);

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Eliminar';
        deleteButton.onclick = () => deleteTask(task.id);

        taskItem.appendChild(editButton);
        taskItem.appendChild(deleteButton);
        tasks.appendChild(taskItem);
      });
    })
    .catch(error => console.error(error));
}
//Armo una funcion para editar los turnos y otra para borrarlos. Uso PUT y DELETE.
function editTask(id, name, date, description) {
  const newName = prompt('Introduce o modifica el beneficiario:', name);
  const newDate = prompt('Introduce la nueva fecha:', date);
  const newDescription = prompt('Introduce la nueva descripción:', description);

  fetch(`${endpoint}/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ title: newName, date: newDate, description: newDescription }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(() => showTasks())
  .catch(error => console.error(error));
}

function deleteTask(id) {
  const confirmDelete = confirm('¿Estás seguro de que quieres eliminar este turno?');
  if (confirmDelete) {
    fetch(`${endpoint}/${id}`, {
      method: 'DELETE'
    })
    .then(() => showTasks())
    .catch(error => console.error(error));
  }
}

// Mostramos las tareas al cargar la web
showTasks();