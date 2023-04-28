const form = document.getElementById('newsletter-form')

form.addEventListener('submit', function(event) {
  event.preventDefault()

  const formData = new FormData(form);

  fetch('https://644a71a779279846dce8ce37.mockapi.io/Newsletter', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(Object.fromEntries(formData))
  })
  .then(response => response.json())
  .then(data => {
    console.log('Datos enviados:', data)
    alert('Gracias por suscribirse!')
    form.reset();
  })
  .catch(error => {
    console.error('Error al enviar los datos:', error)
    alert('Lo siento, ha ocurrido un error. Por favor, inténtalo de nuevo más tarde.')
  })
})
