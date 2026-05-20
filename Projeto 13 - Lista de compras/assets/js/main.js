const itemInput = document.querySelector('#itemInput');
const buttonAdd = document.querySelector('#buttonAdd');
const list = document.querySelector('#list');

function createItem () {
    const newLi = document.createElement('li');
    newLi.textContent = itemInput.value;

    newLi.classList.add('list');
    list.appendChild(newLi);
    
    itemInput.value = '';
}

buttonAdd.addEventListener('click', createItem);