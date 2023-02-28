// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

// Функция должна изменять принимаемый массив и ничего не возвращать.

// Например:

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

// alert( arr ); // [3, 1]
// Открыть песочницу с тестами для задачи.

function filterRangeInPlace(arr, a, b) {
    arr.forEach((el, ind) => {
        if (el < a || el > b) {
            arr.splice(ind, 1)
        }
    })
}
filterRangeInPlace(arr, 1, 4);
