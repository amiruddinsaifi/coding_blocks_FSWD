showTodoList();
let addtaskinput = document.getElementById("addtaskinput");
let addbtn = document.getElementById("addbtn");

addbtn.addEventListener("click", function(){
    addtaskinputval = addtaskinput.value;
    if(addtaskinputval.trim()!=0){
        let webtask = localStorage.getItem("localtask");
        if(webtask == null){
            taskObj = [];
        }
        else{
            taskObj = JSON.parse(webtask);
        }
        taskObj.push({'task_name':addtaskinputval, 'completeStatus':false});
		// console.log(taskObj, 'Ashendra');
        localStorage.setItem("localtask", JSON.stringify(taskObj));
        addtaskinput.value = '';
    }
    showTodoList();
})

// showTodoList
function showTodoList(){
    let webtask = localStorage.getItem("localtask");
    if(webtask == null){
        taskObj = [];
    }
    else{
        taskObj = JSON.parse(webtask);
    }
    let html = '';
    let todoList = document.getElementById("todoList");
    taskObj.forEach((item, index) => {

        if(item.completeStatus==true){
            taskCompleteValue = `<td class="completed">${item.task_name}</td>`;
        }else{
            taskCompleteValue = `<td>${item.task_name}</td>`;
        }
        html += `<tr>
                    <th scope="row">${index+1}</th>
                    ${taskCompleteValue}
                    <td><b><button type="button" onclick="editbtn(${index})" class="text-primary"></i>Edit</button></b></td>
                   <td><b><button type="button" onclick="deteletodo(${index})" class="text-danger"></i>Delete</button></b></td>
                </tr>`;
    });
    todoList.innerHTML = html;
}

// editbtn to edit a perticuler item
function editbtn(index){
    let saveindex = document.getElementById("saveindex");
    let addbtn = document.getElementById("addbtn");
    let savebtn = document.getElementById("savebtn");
    saveindex.value = index;
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask); 
    
    addtaskinput.value = taskObj[index]['task_name'];
    addbtn.style.display="none";
    savebtn.style.display="block";
}

// savebtn to save item after edit it
let savebtn = document.getElementById("savebtn");
savebtn.addEventListener("click", function(){
    let addbtn = document.getElementById("addbtn");
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask); 
    let saveindex = document.getElementById("saveindex").value;
    
    for (keys in taskObj[saveindex]) {
        if(keys == 'task_name'){
            taskObj[saveindex].task_name = addtaskinput.value;
        }
      }
    savebtn.style.display="none";
    addbtn.style.display="block";
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    addtaskinput.value='';
    showTodoList();
})
// fuction to delete a perticuler item 
function deteletodo(index){
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);
    taskObj.splice(index, 1);
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    showTodoList();
}
