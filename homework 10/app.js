
let todoList =  [{
                title: 'Go to market', 
                isActive : true,
            }, 
            {
                title: 'Buy food', 
                isActive : false,
            }, 
            {
                title: 'Make dinner', 
                isActive : true,
            }
            ];

let form = document.getElementById("form");
let form__submit = document.getElementById("form__submit");

let render = function(arr){
    let tolal__item = document.querySelector('.total__item');
    tolal__item.innerText = ` ${arr.length} item`;
   
    let ul = document.createElement("ul");
    ul.id = 'todoList';
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        let li = document.createElement("li");
       
        if (element.isActive == false) {
            li.classList.add("done"); 
           
        }
        else{
            li.style.color = 'red';
        };

        li.classList.add("input__work");

        let btn = document.createElement("button");
        btn.innerText = 'done';
       

        li.innerText = element.title;
        li.style.listStyle = "none";
        li.appendChild(btn);
     

        btn.onclick = function(){
            arr[i].isActive = !arr[i].isActive;
            if (arr[i].isActive === false) {
                li.classList.add("done");
                li.style.color = 'gray';

            }
            else{
                li.classList.remove("done"); 
                li.style.color = 'red';
            }
        }
        ul.appendChild(li);
    }
    form__submit.appendChild(ul)
}


form.onsubmit = function(event){
    event.preventDefault();
    let ul = document.getElementById("todoList");
    ul.remove();
    let inputWork = form.todo.value;
    let newWork = {
        title : inputWork,
        isActive: true,
    }

    todoList.push(newWork);
    render(todoList);
}

render(todoList);
    
let button = document.querySelectorAll("#btn");
console.log(button);

button[0].onclick = function(){
    let ul = document.getElementById("todoList");
    ul.remove();
    render(todoList);
}

button[1].onclick = function(){
    let ul = document.getElementById("todoList");
    ul.remove();
    let active = todoList.filter(function(isActive__true){
        return isActive__true.isActive === true;
    });
    render(active);
};

button[2].onclick = function(){
    let ul = document.getElementById("todoList");
    ul.remove();
    let complete = todoList.filter(function(isActive__false){
        return isActive__false.isActive === false;
    });
    render(complete);
};