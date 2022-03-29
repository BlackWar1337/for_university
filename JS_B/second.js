var arr = ["у", "шурупа", "цвет", "интереснее"];

function printf(arr) {
    var t = " "
    for (var i = 0; i < arr.length; i++)
        t += arr[i] + " ";
    console.log(t);
}

printf(arr)