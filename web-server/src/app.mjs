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
});

// app.com/help/404
app.get("/help/*path", (request, response) => {
  response.render('error', {
    title: 'Weather App - Error 404',
    name: 'Whaag',
    errorMessage: 'Article not found'
  });
});

// app.com/weather
app.get("/weather", (request, response) => {
  const address = request.query.address;

  address? response.send({
    forecast: 'rain',
    location: address
  }): response.send({
    error: 'You must provide an address'
  });
});

// Test
app.get("/products", (request, response) => {
  console.log(request.query);
  if (!request.query.search) {
    return response.send('You must provide a search term');
  }
  response.send({products: []})
});

// default
app.get("/*path", (request, response) => {
  response.render('error', {
    title: 'Weather App - Error 404',
    name: 'Whaag',
    errorMessage: 'Page not found'
  });
});

app.listen(3000, () => console.log("Server started on port 3000"));
