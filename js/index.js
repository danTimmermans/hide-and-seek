let nav = document.getElementsByTagName("nav")[0];
let yLastPosition;
// console.log(window.scrollY);
window.addEventListener("scroll", () =>{
    if(window.scrollY > 600){
        nav.classList.add("hide")
    }
    if(yLastPosition > window.scrollY){
        nav.classList.remove("hide")
    }
    yLastPosition = window.scrollY;
});