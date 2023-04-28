const endpoint = 'https://644c37984bdbc0cc3aa4e2c6.mockapi.io/tasks';

function addTask() {
    const title = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const description = document.getElementById('description').value;
  
    fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify({ name, date, description }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      const tasks = document.getElementById('tasks');
      const taskItem = document.createElement('li');
      taskItem.innerHTML = `${data.date} - ${data.description}`;
      tasks.appendChild(taskItem);
      alert("✅ Solicitud Registrada con Exito!")
    })
    .catch(error => console.error(error));
  }
  
 