
let text = document.getElementById("write");
let btn = document.getElementById("save");
let cell = document.getElementById("selectID");
let optionCell1 = document.getElementById("one");
let optionCell2 = document.getElementById("two");
let optionCell3 = document.getElementById("three");
const form = document.getElementById('form')

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
