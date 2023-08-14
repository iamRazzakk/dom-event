document.getElementById('list-container').addEventListener("click", function(event){
    event.target.parentNode.removeChild(event.target)
})
document.getElementById("btn").addEventListener("click", function(){
    const listContainer = document.getElementById("list-container")
    const li = document.createElement("li")
    li.innerText = "Add me please"
    li.classList.add("item")
    listContainer.appendChild(li)
})