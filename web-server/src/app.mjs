import express from 'express';

const app = express();

// app.com
app.get('', (request, response) => {
    response.send('Express working in here');
});

// app.com/help
app.get('/help', (request, response) => {
    response.send('Here, have some help');
});

// app.com/about
app.get('/about', (request, response) => {
    response.send('Familly secret. All to do with herbs and spicies');
});

// app.com/weather
app.get('/weather', (request, response) => {
    response.send(`Rain. It's Dublin, what did you think?`);
})

app.listen(3000, () => console.log('Server started on port 3000'));