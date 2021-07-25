var a = document.getElementById('main')
var b = document.getElementById("show")

function todo(){
    var newElement = document.createElement("P")

    var value = b.value

    var text = value

    text = document.createTextNode(text)

    newElement.appendChild(text)

    a.appendChild(newElement)

    b.value = ""

    var editBtn = document.createElement("BUTTON")
    
    var editBtnText = document.createTextNode("edit")
    
    editBtn.appendChild(editBtnText)
    
    newElement.appendChild(editBtn)

    var delBtn = document.createElement("BUTTON")

    var delBtnText = document.createTextNode("delete")

    delBtn.appendChild(delBtnText)

    newElement.appendChild(delBtn)

}

function delToDo(){
    console.log("chal gya")
}