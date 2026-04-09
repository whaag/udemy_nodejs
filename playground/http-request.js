import https from 'https';

const url = `https://api.open-meteo.com/v1/forecast?current=temperature_2m,precipitation_probability,apparent_temperature&latitude=53.3331&longitude=-6.2489`;

const request = https.request(url, (response) => {
    
    let data = '';

    response.on('data', (chunk) => {
        data = data + chunk.toString();
    });

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    });

});

request.on('error', (error) => {
    console.log(`Error ${error}`)
})

request.end();