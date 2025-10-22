function validateMoviesArray(movies) {
  if (!Array.isArray(movies)) {
    throw new TypeError('You need an array of movies');
  }
  if (movies.length === 0) {
    console.warn('No movies found');
    return false;
  }
  return true;
}

function getAllDirectors(movies) {
  if (!validateMoviesArray(movies)) return [];

  let directors = movies.map((movie) => movie.director);
  return [...new Set(directors)];
}

function getMoviesFromDirector(movies, director) {
  if (!validateMoviesArray(movies)) return [];

  let filmsFound = movies.filter((movie) => movie.director === director);
  let titlesFound = filmsFound.map((movie) => movie.title);
  return titlesFound;
}

function moviesAverageOfDirector(movies, director) {
  if (!validateMoviesArray(movies)) return [];
  let filmsFound = movies.filter((movie) => movie.director === director);
  if (filmsFound.length === 0) {
      return undefined;
  }
  let scores = filmsFound.map((movie) => movie.score);
  let totalScore = scores.reduce((acumul, val) => acumul + val, 0);
  return parseFloat((totalScore / filmsFound.length).toFixed(2));
}

function orderAlphabetically(movies) {
  if (!validateMoviesArray(movies)) return [];
  let titles = movies.map((movie) => movie.title);
  let sortedTitles = titles.sort((a, b) => a.localeCompare(b));
  return sortedTitles.slice(0, 20);
}

function orderByYear(movies) {
  if (!validateMoviesArray(movies)) return [];
  let sortedMovies = [...movies];
  sortedMovies.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    }
    return a.title.localeCompare(b.title);
  });
  return sortedMovies;
}

function moviesAverageByCategory(movies, genre) {
  if (!validateMoviesArray(movies)) return [];
  let filmsFound = movies.filter((movie) => movie.genre.includes(genre));
  if (filmsFound.length === 0) {
  return undefined;
}
  let scores = filmsFound.map((movie) => movie.score);
  let totalScore = scores.reduce((acumul, val) => acumul + val, 0);
  return parseFloat((totalScore / filmsFound.length).toFixed(2));
}

function hoursToMinutes(movies) {
  return movies.map((movie) => {
    const parts = movie.duration.split(' ');
    const hours = parseInt(parts[0]);
    const minutes = parseInt(parts[1]);
    const totalMinutes = hours * 60 + minutes;
    return {
      ...movie,
      duration: totalMinutes
    };
  });
}

function bestFilmOfYear(movies, year) {
  const filmsOfYear = movies.filter(movie => movie.year === year);

  if (filmsOfYear.length === 0) {
    return null
  }
  const bestFilm = filmsOfYear.reduce((best, current) => {
    return current.score > best.score ? current : best;
  }, filmsOfYear[0]);

  return bestFilm;
}

if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}