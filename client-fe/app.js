
const getButton = document.getElementById('get')
getButton.addEventListener('click', () => {
  console.log('GET')

  fetch("http://localhost:8000/books")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
})

const postButton = document.getElementById('post')
postButton.addEventListener('click', () => {
  console.log('POST')

  fetch("http://localhost:8000/users", {
    method: "POST",
    body: JSON.stringify({
     name: "ini dari client"
    }),
    headers: {
      "content-type": "application/json"
    }
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
})