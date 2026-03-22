import dotenv from 'dotenv';

dotenv.config();

const url = `http://api.weatherstack.com/current?access_key=${process.env.API_KEY}&query=Dublin&units=m`;

fetch(url)
.then((response) => response.json())
.then((data) => console.log(data.current.temperature));