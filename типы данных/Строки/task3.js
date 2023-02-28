// Каков результат? Почему?

let arr = ["a", "b"];

arr.push(function () {
    alert(this);
});

arr[2](); // ?
// Ответ 
// Выведет a,b,function(){alert(this)}; Массив это объект и работает так же.