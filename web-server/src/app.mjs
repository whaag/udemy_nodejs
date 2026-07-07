import express from "express";

const app = express();

app.use(express.static("public"));

// app.com/weather
app.get("/weather", (request, response) => {
  response.send(`Rain. It's Dublin, what did you think?`);
});

app.listen(3000, () => console.log("Server started on port 3000"));
