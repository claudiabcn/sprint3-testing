import { movies } from './data.js';

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
const directorsArray = getAllDirectors(movies);
console.log('EXERCICE 1 -> The directors: ', directorsArray);

function getMoviesFromDirector(movies, director) {
  if (!validateMoviesArray(movies)) return [];

  let filmsFound = movies.filter((movie) => movie.director === director);
  let titlesFound = filmsFound.map((movie) => movie.title);
  return titlesFound;
}
const moviesDirectedBy = getMoviesFromDirector(movies, 'Christopher Nolan');
console.log('EXERCICE 2 -> The movies directed by him: ', moviesDirectedBy);

function moviesAverageOfDirector(movies, director) {
  if (!validateMoviesArray(movies)) return [];
  let filmsFound = movies.filter((movie) => movie.director === director);
  if (filmsFound.length === 0) {
    console.log(`No movies found for director: ${director}`);
    return undefined;
  }
  let scores = filmsFound.map((movie) => movie.score);
  let totalScore = scores.reduce((acumul, val) => acumul + val, 0);
  return parseFloat((totalScore / filmsFound.length).toFixed(2));
}
const averageScore = moviesAverageOfDirector(movies, 'Christopher Nolan');
if (averageScore === undefined) {
  console.log(`EXERCICE 3 -> Director not found`);
} else
  console.log('EXERCICE 3 -> The average of his movies is: ' + averageScore);

function orderAlphabetically(movies) {
  if (!validateMoviesArray(movies)) return [];
  let titles = movies.map((movie) => movie.title);
  let sortedTitles = titles.sort((a, b) => a.localeCompare(b));
  return sortedTitles.slice(0, 20);
}
const titlesArray = orderAlphabetically(movies);
console.log(
  'EXERCICE 4 -> First 20 movies ordered alphabetically:',
  titlesArray
);

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
const yearsArray = orderByYear(movies);
console.log('EXERCICE 5 ->Movies ordered by year: ', yearsArray);

function moviesAverageByCategory(movies, genre) {
  if (!validateMoviesArray(movies)) return [];
  let filmsFound = movies.filter((movie) => movie.genre.includes(genre));
  if (filmsFound.length === 0) {
    console.log(`No movies found for genre: ${genre}`);
    return undefined;
  }
  let scores = filmsFound.map((movie) => movie.score);
  let totalScore = scores.reduce((acumul, val) => acumul + val, 0);
  return parseFloat((totalScore / filmsFound.length).toFixed(2));
}
const averageGenre = moviesAverageByCategory(movies, 'Drama');
if (averageGenre === undefined) {
  console.log(`EXERCICE 6 -> Genre not found`);
} else
  console.log('EXERCICE 6 -> The average of that movies is: ' + averageGenre);

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
const moviesInMinutes = hoursToMinutes(movies);
console.log('EXERCICE 7 -> Movies duration in minutes: ', moviesInMinutes);

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
const result = bestFilmOfYear(movies, 2001);
if (result===null){
  console.log("EXERCISE 8 -> There aren't films found in that year.")
} else
console.log('EXERCISE 8 -> The best film of the year is:', result);


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
