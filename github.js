document.getElementById("delete-confirm").addEventListener("keyup", function(event){
    const text = event.target.value
    const deleteBtn = document.getElementById("btn-delete")
    if(text === "delete"){
        deleteBtn.removeAttribute("disabled");
    }
    else{
        deleteBtn.setAttribute('disabled',true)
    }
})
document.getElementById('btn-delete').addEventListener("click", function(){
    const secrect = document.querySelector("#secrect-info");
    secrect.style.display = "none";
});