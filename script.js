document.querySelector("#addProduct--container").addEventListener('submit', event =>{
    let item = document.getElementById('addProduct--input').value;
    if(item.length > 0)
    {
        event.preventDefault();
        let currentForm = event.target;
        let shoppingList = currentForm.nextElementSibling;
        let itemText = currentForm.querySelector('#addProduct--input').value;
        let listItem = document.createElement('li');
        listItem.classList.add('productItem');
        listItem.innerText = itemText;
        listItem.style.textDecoration = 'none';
        shoppingList.appendChild(listItem);
        document.getElementById('addProduct--input').value = "";
    }
    else{
       alert('You can not add an empty bullet');
    }
});

document.querySelector('#productList--list').addEventListener('click', event =>{
    event.preventDefault();
    let currentList = event.currentTarget;
    let currentItem;
    currentItem = event.target.closest('.productItem');  
    
    if(currentItem.style.textDecoration == 'none'){
        currentItem.style.textDecoration = 'line-through';
        currentItem.style.color = '#A0A0A0';
    }
    else{
        currentItem.style.textDecoration = 'none';
        currentItem.style.color = '#000000';
    }

    
});

document.querySelector('#productList--list').addEventListener('dblclick', event =>{
    event.preventDefault();
    let currentList = event.currentTarget;
    let currentItem;
    currentItem = event.target.closest('.productItem');
    currentList.removeChild(currentItem);
});




