console.log("Client side file loaded");

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

const message = document.querySelector('#message')
const city = document.querySelector('#location');
const temperature = document.querySelector('#temperature');

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();

  city.textContent = "";
  temperature.textContent = "";
  message.textContent = "Loading ...";
  
  const location = search.value;

  fetch(`http://localhost:3000/weather?address=${location}`).then((response) => response.json()).then((data) => {
    if(data.error) {
      message.textContent = `Error: ${data.error}`;
    } else {
      message.textContent = "";
      city.textContent = `Location ${data.Location}`;
      temperature.textContent = `Temperature: ${data.Temperature}`;
    }
  });
  
});
