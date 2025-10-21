import { movies } from './data.js';

function getAllDirectors(movies) {
  if (movies.length === 0) {
  console.log(`No movies found`);
  return undefined;
}  
let directors = movies.map(movie => movie.director)
return directors;
}
const directorsArray = getAllDirectors(movies);
console.log("EXERCICE 1 ->", directorsArray);


function getMoviesFromDirector(movies, director) {
let filmsFound = movies.filter(movie => movie.director === director)
let titlesFound = filmsFound.map(movie => movie.title)
  if (filmsFound.length === 0) {
  console.log(`No director found: ${director}`);
  return undefined;
}  
return titlesFound;
}
const moviesDirectedBy = getMoviesFromDirector(movies,"Christopher Nolan")
console.log("EXERCICE 2 ->", moviesDirectedBy)


function moviesAverageOfDirector(movies, director) {
let filmsFound = movies.filter(movie => movie.director === director);
  if (filmsFound.length === 0) {
  console.log(`No movies found for director: ${director}`);
  return undefined;
}  
  let scores = filmsFound.map(movie => movie.score);
    let totalScore = scores.reduce((acumul, val) => acumul+val, 0)
  return totalScore/filmsFound.length
}
const averageScore = moviesAverageOfDirector(movies,"Christopher Nolan")
console.log("EXERCICE 3 ->", averageScore)


function orderAlphabetically(movies) {
  if (movies.length === 0) {
  console.log(`No movies found`);
  return undefined;
}  
let titles = movies.map(movie => movie.title)
let sortedTitles= titles.sort((a,b)=>a.localeCompare(b))
return sortedTitles;
}
const titlesArray = orderAlphabetically(movies);
console.log("EXERCICE 4 ->", titlesArray);


// Exercise 5: Order by year, ascending
function orderByYear() {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
