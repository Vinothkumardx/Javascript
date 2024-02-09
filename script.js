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

