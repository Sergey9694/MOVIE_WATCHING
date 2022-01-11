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
/* Условие для повтора вопроса (если он нажал отмена, оставил поле пустым и длина строки более 50 символов) */
    if (a != null && b !=null && a != '' && b != '' && a.length < 50) {
       personalMovieDB.movies[a] = b;
       console.log('done');
    }else {
        console.log('error');
        i--;
    }  
}

/* Условие для вывода статуса киномана в зависимости от числа просмотренных фильмов */
if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB); 