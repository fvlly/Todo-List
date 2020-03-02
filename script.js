// adding items to the list

let listItem = document.querySelector('#list-container')
    let listInput = document.querySelector('#userInput')
    let addButton = document.querySelector('.add-button')
    let clearButton = document.querySelector('.clear-button')
    

 
    addButton.addEventListener('click',add)
    
   



function add () {
    let newItem = document.createElement('li');
    let doneButton = document.createElement('button')
    doneButton.appendChild(document.createTextNode('Done'));
    
    
    if (listInput.value.trim()) {
        newItem.appendChild(document.createTextNode(listInput.value))
        newItem.appendChild(doneButton)
        listItem.appendChild(newItem)
        listInput.value = '';
    } else {
        alert('Please put an item into the list')
    }
    
    doneButton.addEventListener('click',finishedTask)
}

clearButton.addEventListener('click',clear => listItem.textContent ='' )

function finishedTask(e) {
    let task = e.target.parentElement
    task.remove()
}