function addTodo(){
    var input = document.getElementById("input")


    if(input.value.length<3){
        alert("Add a valid task you have to do!")
    }

    else{
    var todo = document.createElement("li")
    todo.innerHTML = input.value


    //li styling
    todo.style.width = "100%"
    todo.style.padding="10px"
    todo.style.boxShadow= "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
    todo.style.borderRadius = "5px"
    todo.style.listStyle = "none"
    todo.style.display = "flex"
    todo.style.justifyContent = "space-between"
    todo.style.marginTop = "10px"

    // seeting id for li
    todo.setAttribute("id", "todoli")
 
    //creating delete button
    var delbtn = document.createElement("button")
    delbtn.innerHTML = "Delete"

    //styling button
    delbtn.style.color = "white"
    delbtn.style.backgroundColor = "#6200EE"
    delbtn.style.padding = "7px"
    delbtn.style.fontSize = "15px"
    delbtn.style.borderRadius = "5px"
    delbtn.style.border = "none"


    delbtn.setAttribute("onclick","deltodo(this)")


    var listpar = document.getElementById("listparent")
   
    listpar.appendChild(todo)

    todo.appendChild(delbtn)

    input.value = ""
   }
}


// delete all function
function delall(){
    var todool = document.getElementById("listparent")
    todool.innerHTML = ""
}


function deltodo(deletebtn){
    var task = deletebtn.parentNode
    task.remove()
}





