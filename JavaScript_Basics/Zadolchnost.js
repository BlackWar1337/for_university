var ob = "false";


function onlyNum(n) {
    var type = "";
    if (!Boolean(n)) {
        if (typeof (n) === "number") {
            type = "number";
        } else if (typeof (n) === "string") {
            type = "string";
        } else if (typeof (n) === "undefined") {
            type = "unf";
        } else if (typeof (n) === "function") {
            type = "fun";
        } else if (n === null) {
            type = "null";
        } else if ((typeof (n) === "object")) {
            type = "object";

        } else {
            type = "boolean";
        }
    }
    console.log(type);
}

onlyNum(ob);