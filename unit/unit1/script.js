// const quest= confirm("Сколько фильмов вы уже посмотрели?"); - просто вопрос
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');


const personalMovieDB={
 count: numberOfFilms,
 movies:{},
 actors:{},
 genres:[],
 privat:false
};

const questAboutTheLastFilm1 = prompt("Один из последних просмотренных фильмов?");
const questAboutRateFilm1 = +prompt("на сколько оцените его?");
const questAboutTheLastFilm2 = prompt("Один из последних просмотренных фильмов?");
const questAboutRateFilm2 = +prompt("на сколько оцените его?");
const questAboutRateFilm3 = +prompt("на сколько оцените его?");

personalMovieDB.movies [questAboutTheLastFilm1]= questAboutRateFilm1;
personalMovieDB.movies [questAboutTheLastFilm2]= questAboutRateFilm2;

console.log(personalMovieDB);