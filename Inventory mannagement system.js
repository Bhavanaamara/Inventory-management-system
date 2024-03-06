let items = [];

function addItem() {
    const itemName = document.getElementById('itemName').value;
    const quantity = parseInt(document.getElementById('quantity').value);

    if (itemName && quantity) {
        items.push({ itemName, quantity });
        displayItems();
        clearInputFields();
    } else {
        alert('Please enter valid item name and quantity.');
    }
}

function displayItems() {
    const itemList = document.getElementById('itemList');
    itemList.innerHTML = '';
    
    items.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('item');
        itemElement.innerHTML = `
            <p><strong>${item.itemName}</strong> - ${item.quantity}</p>
            <button onclick="deleteItem(${index})">Delete</button>
        `;
        itemList.appendChild(itemElement);
    });
}

function deleteItem(index) {
    items.splice(index, 1);
    displayItems();
}

function clearInputFields() {
    document.getElementById('itemName').value = '';
    document.getElementById('quantity').value = '';
}
