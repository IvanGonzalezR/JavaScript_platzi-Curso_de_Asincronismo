/**
 * Callback que suma 2 numeros
 * El callback es la funcion pasada como argumento en otra funcion
 */

function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calc(2, 4, sum));

/**
 * Callback con la fecha actual
 */

function date(callback) {
    console.log(new Date);
    setTimeout(function () {
        let date = new Date;
        callback(date);
    }, 2000)
}

function printDate(dateNow) {
    // const regex = /([0-9]{4})-([0-9]{2})-([0-9A-Z]{5}):([0-9]{2}):([0-9]{2})\.([0-9A-Z]{4})/;
    // const matches = regex.exec(`${dateNow}`);
    // // const year = matches[1];
    console.log(dateNow);
}

date(printDate);