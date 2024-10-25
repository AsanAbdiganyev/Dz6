var input = document.getElementById("input")
var createButton = document.getElementById("create_button")
var todoList = document.getElementById("list")

var Click = () => {
    var textValue = input.value.trim()
    if (!textValue) return alert('Напишите что-нибудь')

    var reversedText = textValue.split("").reverse().join("")

    var div = document.createElement("div")
    var text = document.createElement("h3")

    div.setAttribute('class', 'block_text')
    text.innerHTML = reversedText

    div.append(text)
    todoList.append(div)

    input.value = ""
};

createButton.addEventListener("click", Click)

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') Click()
})

