 "use strict";
 

/*  Создать переменную numberOfFilms и внее поместить ответ от пользователя на вопрос: Сколько фильмов вы уже посмотрели? */

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms ==null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i=0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
        if (a != null && b !=null && a != '' && b != '' && a.length < 50) {
           personalMovieDB.movies[a] = b;
           console.log('done');
        }else {
            console.log('error');
            i--;
        }  
    }
}

rememberMyFilms();


function detectPersonaLevel () {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonaLevel ();



/* Вообще, hidden-это имя аргумента. Когда-то Иван говорил, что если ввести в "поле" для аргумента/ов (if (вот тут) {...}) что-либо (просто имя аргумента или же просто число), то это всегда true. !hidden-это обратное, то есть false. В personalDB.privat "лежит" какое-то значение (false) и мы "сравниваем" это значение (personalDB.privat) с !hidden (false). И если, personalDB.privat, также как и !hidden-false, то мы выводим главный объект в консоль, если же personalDB.privat-true, то мы ничего не делаем. */

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB (personalMovieDB.privat);



function writeYourgenres () {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);  // i-1 .т.к. выводим значение для пользователя с 1 а для кода с 0.}
    }    
}

writeYourgenres();