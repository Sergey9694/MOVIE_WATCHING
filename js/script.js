 "use strict";
 

/*  Создать переменную numberOfFilms и внее поместить ответ от пользователя на вопрос: Сколько фильмов вы уже посмотрели? */

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');



const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

/* Автоматизация вопросов пользователю про фильмы с помощью цикла */
for (let i=0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    

    personalMovieDB.movies[a] = b;
}

console.log(personalMovieDB);