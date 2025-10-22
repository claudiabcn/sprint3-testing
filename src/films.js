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
  let moviesFound = filmsFound.map((movie) => movie);
  return moviesFound;
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
  return 0;
}

  let scores = filmsFound.map((movie) => movie.score);
  let totalScore = scores.reduce((acumul, val) => acumul + val, 0);
  return parseFloat((totalScore / filmsFound.length).toFixed(2));
}

function hoursToMinutes(movies) {
  return movies.map((movie) => {
    const hourMatch = movie.duration.match(/(\d+)h/);
    const minuteMatch = movie.duration.match(/(\d+)m/);
    const hours = hourMatch ? parseInt(hourMatch[1]) : 0;
    const minutes = minuteMatch ? parseInt(minuteMatch[1]) : 0;
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