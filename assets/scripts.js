let obj = {
    input: document.getElementById("input"),
    botao: document.getElementById("botao"),
    ul: document.getElementById("ul"),
    li: 0,
    texto: 0
};

obj.botao.addEventListener("click", adicionar);

function adicionar() {
    if (!obj.input.value) {
        alert("Insira alguma tarefa!");
    } else {
        obj.texto = obj.input.value;
        obj.li = document.createElement("li");
        obj.li.innerHTML = "<label><input type='checkbox'><span>" + obj.texto + "</span></label>";
        obj.ul.appendChild(obj.li);
        obj.input.value = "";

    };
};