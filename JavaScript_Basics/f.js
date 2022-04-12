var num = 6;
var str = "JavaScript";
var bool = true ;
var undef;

function func(num)  {
};

function onlyNum(num)  {
    if(typeof (num) === "number") {
        type  = " Это число!";
    } else if (typeof (num ) ==="string") {
        type  = " Это cтрока!";
    } else if (typeof (num ) ==="boolean") {
        type  = " Это логический тип!";
    } else if (typeof (num ) ==="undefined") {
        type  = " Это отсутствие примитива!";
    } else if (typeof (num ) ==="function") {
        type  = " Это функция!";
    }
console.log(type)
}

onlyNum(num);
onlyNum(str);
onlyNum(bool);
onlyNum(undef);
onlyNum(func);