document.getElementById('click').addEventListener("click", function(){
    console.log("hello me");
})
document.getElementById('text').addEventListener("keyup", function(event){
    // console.log("hello me");
    console.log(event.target.value);
})