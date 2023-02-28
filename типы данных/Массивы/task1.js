// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

ucFirst("вася") == "Вася";

function ucFirst(str) {
    let bigLetter = str[0].toUpperCase();
    let littleLetters = str.slice(1);
    return bigLetter + littleLetters;
}