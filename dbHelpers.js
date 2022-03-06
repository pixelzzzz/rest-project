const Movie = require("./movieSchema.js").Movies;
exports.addAMovie = async (data) => {
  let movie = new Movie({
    name: data.name,
    producer: data.producer,
    rating: data.rating,
  });
  return await movie.save();
};

exports.updateAMovie = async (data) => {
  return await Movie.findOneAndUpdate(
    {
      _id: data.id,
    },
    {
      $set: {
        name: data.name,
        producer: data.producer,
        rating: data.rating,
      },
    },
    {
      returnNewDocument: true,
    }
  );
};

exports.getAMovie = async (data) => {
  console.log(data.id);
  return await Movie.findById(data.id);
};

exports.getAllMovies = async () => {
  return await Movie.find({});
};

exports.deleteAMovie = async (data) => {
  return await Movie.deleteOne({
    _id: data.id,
  });
}
