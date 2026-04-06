const url = `https://api.open-meteo.com/v1/forecast?current=temperature_2m,precipitation_probability,apparent_temperature&latitude=53.3331&longitude=-6.2489`;

(async () => {
    try {
        await fetch(url)
            .then((response) => response.json())
            .then((data) => console.log(`Temperature: ${data.current.temperature_2m}${data.current_units.temperature_2m}`));
    } catch (error) {
        console.error("Error");
    }
})();


