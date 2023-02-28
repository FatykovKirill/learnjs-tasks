// Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:

// getSecondsToday() == 36000 // (3600 * 10)
// Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

function getSecondsToday() {
    let date = new Date();
    let hour = date.getHours() * 3600;
    let minutes = date.getMinutes() * 60;
    let seconds = date.getSeconds();
    return hour + minutes + seconds;
}

console.log(getSecondsToday());