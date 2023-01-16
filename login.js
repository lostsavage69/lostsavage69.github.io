const username = document.getElementById('username')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (username.value === '' || username.value == null) {
    messages.push('Username is required')
  }

  else if (password.value === '' || password.value == null) {
    messages.push('Password is required')
  }
  
  else if (username.value != "tenebris") {
	messages.push("username or password is incorrect")
  }
  
  else if (password.value != 1) {
	messages.push("username or password is incorrect")
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
  


})