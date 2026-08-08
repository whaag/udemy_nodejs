import express from "express";
import hbs from "hbs";

const app = express();

// Handlebar config
app.set('view engine', 'hbs'); // enables hbs
hbs.registerPartials('partials');

// Express config
app.use(express.static("public"));

// app.com
app.get("/", (request, response) => {
  response.render('index', {
    title: 'Weather App - Home',
    name: 'Whaag'
  });
})

// app.com/about
app.get("/about", (request, response) => {
  response.render('about', {
    title: 'Weather App - About',
    name: 'Whaag'
  });
})

// app.com/help
app.get("/help", (request, response) => {
  response.render('help', {
    title: 'Weather App - Help',
    name: 'Whaag',
    message: 'Do not take candy from strangers'
  });
})

// app.com/weather
app.get("/weather", (request, response) => {
  response.send(`Rain. It's Dublin, what did you think?`);
});

app.listen(3000, () => console.log("Server started on port 3000"));
