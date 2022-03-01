
//toggle button 

const btn = document.querySelector(".btn")

btn.addEventListener("click", () =>{
  document.body.classList.toggle("dark")  

if (document.body.classList.contains("dark")){
    btn.innerHTML = "Light Theme";
}
else{
    btn.innerHTML = "Dark Theme"
}
})
document.addEventListener("keydown", function (event) {
    // declaring variablr asigning them to access element from html page using getElementByID 
    let numDisplay = document.getElementById("numDisplay");
    let numCode = document.getElementById("codeDisplay");
    let numKey = document.getElementById("keyDisplay");
    let numWhich = document.getElementById("whichDisplay");
   //declaring variable asigning them to method to get key ,its code,and which key is press
    let keyDown = event.key;
    let keyCode = event.code;
    let keyWhich = event.which;

    //manupulating html page by asigning them with new value 

    numDisplay.innerHTML = keyDown;
 
    numKey.innerHTML = keyDown
    numCode.innerHTML = keyCode
    numWhich.innerHTML = keyWhich;

})