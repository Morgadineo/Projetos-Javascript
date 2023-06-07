let range = document.getElementById("range");
let body = document.body
let valor_anterior = range.value

let temperatura = document.getElementById("temperatura")

range.addEventListener("input", function () {
    let valor = range.value
    temperatura.innerHTML = valor

});
