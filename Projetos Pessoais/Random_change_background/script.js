
function changeBackground() {
    let color = Math.floor(Math.random() * 16777215).toString(16);
    color = "#" + color

    text.innerHTML = color;
    body.style.backgroundColor = color

}

var body = document.getElementById("body")

var text = document.getElementById("text_color")