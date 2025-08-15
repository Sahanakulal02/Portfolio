 const hamburger=document.querySelector(".hamburger");
    const menu_bar=document.querySelector(".navbar-menu .menu-bar");
    hamburger.addEventListener("click",()=>{
      menu_bar.classList.toggle("show")
    });
document.addEventListener("DOMContentLoaded", function () {
  new Typed(".sec-1-2-3", {
    strings: ["Frontend Developer", "DSA Enthusiast", "Data Analytics Explorer","Problem Solver"],
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 1000,
    startDelay: 300,
    loop: true,
    showCursor: false,
    cursorChar: "|",
    autoInsertCss: true
  });
});