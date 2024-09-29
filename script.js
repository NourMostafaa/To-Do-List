let input = document.querySelector("input[type='text']");
let btn = document.querySelector("button");
let list = document.querySelector("#todos");
function addTask(){
    if (input.value === ""){
        event.preventDefault();
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "You must write somthing !",
        });
    }else{
        event.preventDefault();
        let li = document.createElement("li");
        li.innerHTML = input.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        input.value = "";
        saveData()
    }
}


list.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
    saveData()
},false)

function saveData(){
    localStorage.setItem("data", list.innerHTML);
}

window.onload = function(){
    list.innerHTML = localStorage.getItem("data");
}