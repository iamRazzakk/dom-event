function makeYellow() {
    document.body.style.backgroundColor = "yellow";
}

// another option what i use

const pinkButton = document.getElementById("make-pink")
pinkButton.addEventListener('click', makePink)

function makePink() {
    document.body.style.backgroundColor = "#FF69B4"
}

// another option
const MakeGreen = document.getElementById("make-green")
MakeGreen.addEventListener("click", function MakeMeGreen() {
    document.body.style.backgroundColor = "green"
})

// another one

document.getElementById("make-blue").addEventListener("click", function () {
    document.body.style.backgroundColor = "blue"
})


// how to change defult text or any thing

// function makemeChange() {
//     const changeME = document.getElementById("make-me-change")
//     changeME.innerText = "I heat this world"
// }
//  same function another away
//  document.getElementById("make-btn").addEventListener("click", function(){
//     const changeIt = document.getElementById("make-me-change")
//     changeIt.innerText = "I heat This world"
//  })

// i want whean i click in update the the title is changeIt

// document.getElementById("update-btn").addEventListener("click", function(){
//     const inputField = document.getElementById("input-field");
//     const inputText = inputField.value;
//     const p = document.getElementById("input-text-display")
//     p.innerText = inputText
//     inputField.value ="";
// })


