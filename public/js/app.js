const weatherForm = document.querySelector('form')
const searchValue = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const location = searchValue.value
  messageOne.textContent = 'Loading'
  fetch(`/weather?address=${location}`).then((response)=> {
  response.json().then((data)=> {
    if(data.error) {
      console.log(data.error)
      messageTwo.textContent = data.error
    } else {
      messageOne.textContent = data.location
      messageTwo.textContent = data.forecast
      console.log(data.location) 
      console.log(data.forecast)
    }
  })
})

})
