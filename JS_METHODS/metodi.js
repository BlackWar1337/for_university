var firstArray = [1, 2, 3, "n", 5, 6, 7, 8, 9, 10];
var secondArray = [1, 2, 3, 4, 5, 6, 7, "n", 9, 10]

//1.1
function closeToN(arr) {
    return [arr.indexOf("n", 0) - 1, arr.indexOf("n", 0) + 1]
}

//1.2
function numbersAfterN(arr) {
    var n = arr.indexOf("n", 0);
    var ExitArr = arr.slice(n + 1, arr.length);
    return ExitArr;
}

//1.3
function mergerNumbersAfterN(arr, arr1) {
    return (arr.splice(arr.indexOf("n", 0) + 1, arr.length - arr.indexOf("n", 0)).concat(arr1.slice(0, arr1.indexOf("n", 0))));
}

//часть 2
var arr1 = [1, 2, 3, 4/*...*/];

// 2.1

///2.2
function reverseString(arr) {
    return arr.join('-', arr.reverse());
}

// ЧАСТЬ 3

//3,1
var str = "?Я?предпочитаю?вести?здоровый?образ?жизни";
function splitStr(str) {
    return (str.split("?").slice(1));
}
//3.2

//4.1

///4.2
var str2 = "JavaScript";
var underStr2 = "J";

function startOrEnd(str, underStr) {
    return str.startsWith(underStr) || str.endsWith(underStr);
}

//lg(startOrEnd(str2, underStr2));