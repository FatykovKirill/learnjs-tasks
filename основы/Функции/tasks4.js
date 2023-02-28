// Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1

// Ответ

function pow(x, n) {
    if (n < 0) {
        return false
    }
    return x ** n;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

alert(pow(x, n));