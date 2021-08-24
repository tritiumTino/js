//Задание 3.
'use strict';
let a = 5;
let b = 0;

function calculateNums (a, b) {
    if (a >= 0 && b >= 0) {
        return (a > b) ? (a - b) : (b - a);
    } else if (a < 0 && b < 0) {
        return a * b;
    } else {
        return a + b;
    }
}

alert(calculateNums(a, b));


//Задание 4. Реализовать функции на 4 базовые арифметические операции
const sumNums = (a, b) => a + b;
const multiplyNums = (a, b) => a * b;
const subtractNums = (a, b) => a - b;

/**
 * Функция принимает два числа. Если делитель отличен от нуля, возвращает результат, иначе выбрасывает исключение
 * @param {number} a - делимое
 * @param {number} b - делитель
 * @throws {Error} - оишбка деления на 0
 * @returns {number} - частное
 */
function divideNums (a, b) {
    if (b != 0) {
        return a / b;
    } else {
        throw new Error('zeroDivisionError')
    }
}


//Задание 5.
/**
 * Функция возвращает результат арифметической операции по переданному оператору
 * @param {number} arg1 - Первое число
 * @param {number} arg2 - Второе число
 * @param {string} operation - строка с названием операции
 * @returns {number}
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            return sumNums(arg1, arg2);
        case '-':
            return subtractNums(arg1, arg2);
        case '*':
            return multiplyNums(arg1, arg2);
        case '/':
            return divideNums(arg1, arg2);
    }
}

alert(`Сумма ${a} и ${b}: ${mathOperation(a, b, '+')}`);
alert(`Произведение ${a} и ${b}: ${mathOperation(a, b, '*')}`);
alert(`Вычитание из ${a} - ${b}: ${mathOperation(a, b, '-')}`);
alert(`Деление ${a} на ${b}: ${mathOperation(a, b, '/')}`);
