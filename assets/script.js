const inputNovaTarefa = document.querySelector('.task-input');
const listaTarefas = document.querySelector('.tasks-list');
const buttonAdicionaTarefa = document.querySelector('.add-button');

function gerarId() {
	return Math.floor(Math.random() *3000);
}

inputNovaTarefa.addEventListener('keypress', (e) => {
	if(e.keyCode == 13) { //keyCode corresponde a uma tecla do teclado. 13 corresponde a tecla ENTER
		let tarefa = {
			nome: inputNovaTarefa.value,
			id: gerarId(),
		}
		adicionarTarefa(tarefa);
	}
})

buttonAdicionaTarefa.addEventListener('click', (e) => {
	let tarefa = {
		nome: inputNovaTarefa.value,
		id: gerarId(),
	}
	adicionarTarefa(tarefa);
})

function adicionarTarefa(tarefa) {
	let li = criarLi(tarefa);
	listaTarefas.appendChild(li);
	inputNovaTarefa.value = '';
}

function criarLi(tarefa) {
	let li = document.createElement('li');

	let span = document.createElement('span');
	span.classList.add('tasks');
	span.innerHTML = tarefa.nome;

	let div = document.createElement('div');

	let buttonEdit = document.createElement('button');
	buttonEdit.classList.add('action-button');
	buttonEdit.innerHTML = '<i class="fa fa-pencil"></i>';

	let buttonDelete = document.createElement('button');
	buttonDelete.classList.add('action-button');
	buttonDelete.innerHTML =  '<i class="fa fa-trash"></i>';

	div.appendChild(buttonEdit);
	div.appendChild(buttonDelete);

	li.appendChild(span);
	li.appendChild(div);
	return li;
}
