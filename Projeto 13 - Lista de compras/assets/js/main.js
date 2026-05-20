const itemInput = document.querySelector('#itemInput');
const buttonAdd = document.querySelector('#buttonAdd');
const list = document.querySelector('#list');

function createItem () {
    const newLi = document.createElement('li');
    const deleteButton = document.createElement('button');

    deleteButton.textContent = 'Delete';
    newLi.textContent = itemInput.value;

    newLi.classList.add('list');
    deleteButton.classList.add('deleteButton');

    list.appendChild(newLi);
    newLi.appendChild(deleteButton);

    deleteButton.addEventListener('click', () => newLi.remove());
    
    itemInput.value = '';
}

buttonAdd.addEventListener('click', createItem);