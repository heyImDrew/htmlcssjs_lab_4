function onClickFunButton() {
    let selectedElements = Array.from(document.getElementsByClassName("radiobutton"));
    for (let i = 0; i < selectedElements.length; i++) {
        if (selectedElements[i].checked) {    
            selectedElements[i].checked = false;
            Array.from(document.getElementsByClassName("rblabel"))[i].classList.remove("ischecked");
            if (i == selectedElements.length - 1) {
                Array.from(document.getElementsByClassName("rblabel"))[0].classList.add("ischecked");
                selectedElements[0].checked = true;
            } else {
                Array.from(document.getElementsByClassName("rblabel"))[i + 1].classList.add("ischecked");
                selectedElements[i + 1].checked = true;
            }
            return;
        }
    }
}

function onClickInfoButton() {
    let selectedElements = Array.from(document.getElementsByClassName("radiobutton"));
    for (let i = 0; i < selectedElements.length; i++) {
        if (selectedElements[i].checked == true) {
            switch (selectedElements[i].value) {
                case "lion":
                    window.open("../html/info.html#idlion");
                    break;
                case "monkey":
                    window.open("../html/info.html#idmonkey");
                    break;
                case "raccoon":
                    window.open("../html/info.html#idraccoon");
                    break;
                case "tiger":
                    window.open("../html/info.html#idtiger");
                    break;
                default:
                    window.open("../html/info.html#iddefault");
                    break;
            }
        }
    }
}
function onClickAddButton() {
    selected = document.getElementById("add").value;
    
    let label = document.createElement("label");
    label.classList.add("rblabel");
    label.textContent = selected;

    let rb = document.createElement("input");
    rb.classList.add("radiobutton");
    rb.type = "radio";
    rb.disabled = true;

    label.appendChild(rb);
    document.getElementById("rbs").appendChild(label);
}