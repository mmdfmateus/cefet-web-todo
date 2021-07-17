let tarefas = [
  {
    nome: "fazer esse tp",
    categoria: "estudos",
    realizada: false
  },
  {
    nome: "jogar valorant",
    categoria: "lazer",
    realizada: false
  }
]

const insereTarefaNaPagina = (tarefa) => {
  let listaEl = document.querySelector('#lista-tarefas');
  
  const newItem = document.createElement('li');
  newItem.classList.add('item-tarefa');
  newItem.innerText = tarefa.nome;
  
  listaEl.appendChild(newItem);
}

const populaTarefasExistentes = () => {
  let listaEl = document.querySelector('#lista-tarefas');
  listaEl.innerHTML = '';
  
  for(let item of tarefas){
    console.log(item);
    insereTarefaNaPagina(item);
  }
}

const addButton = document.getElementById('incluir-nova-tarefa');
addButton.addEventListener('click', (ev) => {
  const input = document.querySelector('#nova-tarefa-nome');
  const category = document.querySelector('#nova-tarefa-categoria');
  
  const tarefa = {
    nome: input.value,
    category: category.value,
    realizada: false
  }
  
  insereTarefaNaPagina(tarefa);
  tarefas.push(tarefa);

  input.value = '';
  input.focus();
});

populaTarefasExistentes();
