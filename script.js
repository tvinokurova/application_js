
let text = document.getElementById("write");
let btn = document.getElementById("save");
let cell = document.getElementById("selectID");

cell.onchange = function next(event) {
    text.value = event.target.value
}

btn.onclick = function () {
    if (text.value === '') {
        alert('Введите значение')
        return
    }

    const select = document.getElementById('selectID')
    select.options[select.selectedIndex].value = text.value
    select.options[select.selectedIndex].text = text.value
}
