console.log("Client side file loaded");

fetch('http://localhost:3000/weather?address=Dublin').then((response) => response.json()).then((data) => {
  if(data.error) {
    console.error(data.error);
  } else {
    console.log(data);
  }
});