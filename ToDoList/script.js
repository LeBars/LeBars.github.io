let 
	//Кнопка добавить
	add = document.querySelector('.add'), 
	//Блок куда добавляется
	list = document.querySelector('.list'), 
	// Массив
	todo; 

//Если в локале есть нужный ключ
if(localStorage.getItem('todo') != null) { 
	//Тогда массив заполняется из локала
	todo = JSON.parse(localStorage.getItem('todo'));
} else {
	//Если нет то, создается массив
	todo = []; 
}
	
//Создает функцию, которая создает нвоый элемент с текстом
const taskMaker = text => { 
	const newTask = document.createElement('div');
	newTask.textContent = text;
	list.appendChild(newTask);
};

//Функция инициализации перебора (чтобы из массива все задачи записывались в блок)
function init() {
	for(let i = 0; i < todo.length; i++) {
		taskMaker(todo[i]);
	};
};

//Функция которая добавляет задачу из инпута
function out() {	
	let inputValue = document.querySelector('input');
	taskMaker(inputValue.value);
	todo.push(inputValue.value);
	inputValue.value = '';
	localStorage.setItem('todo', JSON.stringify(todo));
};

//Запуск инициализации
init();

//Кнопка добавить
add.addEventListener('click', out);