
const getButton = document.getElementById('get')
getButton.addEventListener('click', () => {
  console.log('GET')

  fetch("http://localhost:8000/products")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
})

const postButton = document.getElementById('post')
postButton.addEventListener('click', () => {
  console.log('POST')

  fetch("http://localhost:8000/products/add", {
    method: "POST",
    body: JSON.stringify({
     name: "product 5",
     description: "ini product 5",
     price: 10000,
    }),
    headers: {
      "content-type": "application/json"
    }
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
})