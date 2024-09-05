const input = document.getElementById('input');
const buttonInput = document.getElementsByTagName('button')
const listContainer = document.querySelector('.list-container');





const containerTodoApp = document.querySelector('.todo-app');

buttonInput[0].addEventListener('click', addTask);
input.addEventListener('keypress', function (event) {
    if(event.key === 'Enter'){
        addTask();
    }
});
function addTask() {
    const taskText = input.value;
    if(taskText) {
        const newTask = document.createElement('li');
        newTask.textContent = taskText;
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        newTask.appendChild(span);
       listContainer.appendChild(newTask);
    } else {
        alert('Scrivi Qualcosa');
    }
    input.value = '';
    saveTask();

}

listContainer.addEventListener('click', function(e) {
    if(e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
            saveTask();

    }else if(e.target.tagName === "LI"){
        e.target.classList.toggle('completed');
            saveTask();

    }

},false);


function saveTask(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}

showTask();

