let todoList=[
{item: 'By Milk',dueDate:'4/10/2004'},
{item: 'Go to College',dueDate: '3/03/2004'}];

displayItem();

function addTodo(){
    let inputElement=document.querySelector('#todo-input');    
    let dateElement=document.querySelector('#todo-date');

    let todoItem=inputElement.value;
    let todoDate=dateElement.value;
    console.log(todoItem);

    //todoList.push(todoItem);
    todoList.push({item: todoItem,dueDate: todoDate});
    inputElement.value='';
    dateElement.value='';
    displayItem(); 
}

function displayItem(){
    let containerElement=document.querySelector('.todo-container');
    let newHtml='';
    for(let i=0;i<todoList.length;i++){
        let {item,dueDate}=todoList[i];
        newHtml+=`
    
        <span>${item} </span>
        <span>${dueDate} </span>
        <button class="button-delete" onclick="todoList.splice(${i},1);
        displayItem();">Delete</button>
    
            `; }
        containerElement.innerHTML=newHtml;

}


