let closebtn = document.querySelector("#btn");
let nav = document.querySelector("#clearnav");
closebtn.addEventListener("click",function(){
    nav.classList.toggle("active");
});