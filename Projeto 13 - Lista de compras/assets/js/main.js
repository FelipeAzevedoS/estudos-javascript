const itemInput = document.querySelector('#itemInput');
const buttonAdd = document.querySelector('#buttonAdd');
const list = document.querySelector('#list');
const itemList = [];

const savedList = localStorage.getItem('shoppingList');
const parsedList = JSON.parse(savedList);

if(parsedList == null) {
} else{
    parsedList.forEach(createItem);
}

function createItem (item) {
    let itemText;
    const newLi = document.createElement('li');
    const deleteButton = document.createElement('button');

    deleteButton.textContent = 'Delete';
    
    if(typeof item === 'string') {
        itemText = item;
    } else {
        if (!itemInput.value)return;
        itemText = itemInput.value;
    }
    
    newLi.textContent = itemText;
    itemList.push(itemText);
    newLi.classList.add('list');
    deleteButton.classList.add('deleteButton');
    
    list.appendChild(newLi);
    newLi.appendChild(deleteButton);

    const JSONList = JSON.stringify(itemList);
    
    deleteButton.addEventListener('click', deleteAndSave);

    function deleteAndSave() {
        newLi.remove();
        const itemDeleteNum = itemList.indexOf(itemText);
        itemList.splice(itemDeleteNum, 1);
        const JSONList = JSON.stringify(itemList);
        localStorage.setItem('shoppingList', JSONList);
    }
    
    localStorage.setItem('shoppingList', JSONList);

    itemInput.value = '';
}

buttonAdd.addEventListener('click', () => createItem());