let navbar = document.querySelector(".navbar");
let navToggle = document.getElementById("menu__responsive");

navToggle.addEventListener("click", ()=>{
    navbar.classList.toggle("active");
    navToggle.classList.toggle("fa-bar");
    navToggle.classList.toggle("fa-times");
});

window.onscroll = () =>{

    if(window.scrollY > 0){
        document.querySelector('.navbar__top').classList.add('nav--active');
    }else{
        document.querySelector('.navbar__top').classList.remove('nav--active');
    }
}



