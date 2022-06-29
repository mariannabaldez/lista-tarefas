const inputNovaTarefa = document.querySelector('.task-input');
const listaTarefas = document.querySelector('.tasks-list');
const buttonAdicionaTarefa = document.querySelector('.add-button');

inputNovaTarefa.addEventListener('keypress', (e) => {
	if(e.keyCode == 13) { //keyCode corresponde a uma tecla do teclado. 13 corresponde a tecla ENTER
		let tarefa = {
			nome: inputNovaTarefa.value,
			id: gerarId(),
		}
		//add tarefa ao html
	}
})

buttonAdicionaTarefa.addEventListener('click', (e) => {
	let tarefa = {
		nome: inputNovaTarefa.value,
		id: gerarId(),
	}
	//add tarefa ao html
})

function geraId() {
	return Math.floor(Math.random() *3000);
}

function adicionarTarefa(tarefa) {
	let li = criarLi(tarefa);
	listaTarefas.appendChild(li);
}

function criarLi(tarefa) {
	let li = document.createElement('li');
}