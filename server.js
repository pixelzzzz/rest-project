// Require express
const express = require("express");
// Initialize express
const app = express();
const db = require("./db");
const {
  addAMovie,
  updateAMovie,
  getAllMovies,
  getAMovie,
  deleteAMovie,
} = require("./dbHelpers");

// parse json objects
app.use(express.json());

// parse url encoded objects- data sent through the url
//app.use(urlencoded({ extended: true}))

// create a server
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.post("/addAMovie", async (req, res) => {
  const { name, producer, rating } = req.body;
  const movie = await addAMovie({ name, producer, rating });
  res.status(201).json(movie);
});

app.post("/updateAMovie", async (req, res) => {
  const { id, name, producer, rating } = req.body;
  const movie = await updateAMovie({ id, name, producer, rating });
  res.status(201).json(movie);
});

app.get("/getAMovie", async (req, res) => {
  const id = req.query.id;
  const movie = await getAMovie({ id });
  res.status(201).json(movie);
});

app.get("/getAllMovies", async (req, res) => {
  const movies = await getAllMovies();
  res.status(201).json(movies);
});

app.delete("/deleteAMovie", async (req, res) => {
  const { id } = req.body;
  const movie = await deleteAMovie(id);
  res.status(201).json(movie);
});

