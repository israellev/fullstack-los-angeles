export { }

//puzzle 1
function printState(str) {
    console.log(str[0]);
    console.log(str[str.length - 1]);
}
printState("lion")

//puzzle 2
function stringValidation() {
    const str = prompt("Enter the letters A in any order")
    if (str == "a")
        console.log(str.trim().toLowerCase().replace(/a/g, "b"))
    else {
        throw "Error"
    }
}

try {
    stringValidation()
}
catch (Error) {
    alert(Error)
}
