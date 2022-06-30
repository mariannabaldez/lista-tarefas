function mudarModo() {
    mudarClasses();
    mudarTextos();
}

function mudarClasses() {
    button.classList.toggle(light-mode);
    body.classList.toggle(light-mode);
    container.classList.toggle(light-mode);
    input.classList.toggle(light-mode);
    Addbutton.classList.toggle(light-mode);
    tarefas.classList.toggle(light-mode);
}

function mudarTextos() {
    if(button.classList.contains('light-mode')) {
        button.innerHTML = "dark mode";
        return
    }

    button.innerHTML = "light mode";
}

const buttonMode = document.querySelector('.mode-selector');
const body = document.getElementsByTagName('body')[0];
const h1 = document.getElementsByTagName('h1');
const container = document.querySelector('.container');
const input = document.querySelector('.task-input');
const Addbutton = document.querySelector('.add-button');
const tarefas = document.querySelector('.tasks-list');

buttonMode.addEventListener(click, mudarModo);
