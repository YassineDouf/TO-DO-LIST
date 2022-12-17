let btn = document.querySelector(".add");
let taskTxt = document.querySelector(".input");
let tasks = document.querySelector(".tasks");





let oldTasks = [];

console.log(oldTasks);
console.log(oldTasks.length);

let id = 0;

function itemUi(task) {
    id++;
    // check html structure to visialize all tasks
    let taskDiv = document.createElement('div');
    let taskSpan = document.createElement('span');
    let taskBtn = document.createElement('button');
    taskSpan.append(task);
    taskBtn.append('delete');
    taskDiv.append(taskSpan, taskBtn);
    taskBtn.classList.add("delete");
    taskDiv.id = `del${id}`;
    taskBtn.id = id;
    taskDiv.style.cssText = "width: 100%;display: flex; justify-content: space-between; border-radius: 7px;-webkit-border-radius: 7px;-moz-border-radius: 7px; -ms-border-radius: 7px;-o-border-radius: 7px;";
    taskBtn.style.cssText = " margin:10px; min-width: 60px;max-width: 10%;font-size: 0.8rem; border-radius: 9px; background-color: red; color: white; -webkit-border-radius: 8px; -moz-border-radius: 8px; -ms-border-radius: 8px;-o-border-radius: 8px;border: none;text-align: center;";
    taskSpan.style.cssText = " margin:10px;background-color: white; width: 85%; max-width: 90%;min-width: 150px;border: 0;border-radius: 8px; padding: 20px; -webkit-border-radius: 8px;-moz-border-radius: 8px;-ms-border-radius: 8px;-o-border-radius: 8px; font-weight: 600; font-size: 1.1rem;";
    tasks.append(taskDiv);
    taskBtn.addEventListener('click', function() {
        console.log('click');
        taskDiv.remove();
        let allTasks = JSON.parse(localStorage.getItem('tasks'));
        let index = allTasks.indexOf(task);
        console.log('index' + index);
        allTasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(allTasks));



    });

}






if (localStorage.getItem('tasks') === null) {
    localStorage.setItem('tasks', '[]');
    id = 0;

} else {
    // restore old tasks
    oldTasks = JSON.parse(localStorage.getItem('tasks'));
    oldTasks.forEach(itemUi);

}


function newTask() {
    let newTasks = oldTasks;
    let l = oldTasks.length;
    newTasks[l] = taskTxt.value;
    tasks.innerHTML = '';
    newTasks.forEach(itemUi);
    taskTxt.value = '';
    // console.log(JSON.stringify(newTasks));
    // store all tasks in localStorage
    localStorage.setItem('tasks', JSON.stringify(newTasks));
}



btn.addEventListener("click", function() {
    if (taskTxt.value.trim().length > 0) {
        console.log('YES');
        console.log(oldTasks);
        console.log(oldTasks.length);
        newTask();

    }
});




document.onclick = function() {
    let ele = this;
    console.log(ele);
    console.log(" World");
    ele.addEventListener("click", function() {
        if (isNaN(Number(ele.target.id))) {
            removeItem();
        }
    });

}