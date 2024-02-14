var overlay=document.querySelector(".popoverlay");
var popup=document.querySelector(".addpop")

function popupopen(){

    overlay.style.display="block";
    popup.style.display="block";
   
}
var cancelbutton=document.getElementById("book-cancel-button");

cancelbutton.addEventListener("click",function(event){
    event.preventDefault();
    overlay.style.display="none";
    popup.style.display="none";
   
})

var containers=document.querySelector(".container");
var title=document.getElementById("title-input");
var author=document.getElementById("author-input")
var short=document.getElementById("description-input")
var addbutton=document.getElementById("book-add-button")
var overlay=document.querySelector(".popoverlay");
var popup=document.querySelector(".addpop")



addbutton.addEventListener("click",function(event){
    event.preventDefault();
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${title.value}</h2>
    <h5>${author.value}</h5>
    <p>${short.value}</p>
    <button onclick="deletefun(event)">Delete</button>
   `
    if (containers) {
        containers.appendChild(div);
        popup.style.display = "none";
        overlay.style.display = "none";
    } else {
        console.error("Container not found!");
    }
})
function deletefun(event){
    event.target.parentElement.remove();
}
