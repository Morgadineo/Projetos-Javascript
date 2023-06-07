function decrease() {
    number -= 1
    label_number.innerHTML = number
}

function reset() {
    number = 0
    label_number.innerHTML = number
}

function increase() {
    number += 1
    label_number.innerHTML = number
}

var number = 0
var label_number = document.getElementById("label_number")