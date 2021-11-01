const mainMenu = document.querySelector(".menu")
const mobMenu = document.querySelector(".nav-mobile-menu")
const blurR = document.querySelector(".mobile-bg")

mobMenu.addEventListener("click", () => {
    mobMenu.classList.toggle("active-menu")
    if(mobMenu.classList.contains("active-menu")){
        mainMenu.classList.add("active-menu")
        blurR.classList.add("show")
        blurR.classList.remove("hide")
        
    } else {
        mainMenu.classList.remove("active-menu")
        blurR.classList.remove("show")
        blurR.classList.add("hide")
    }
})

function hideBlurR() {
    blurR.classList.add("hide");
    blurR.classList.remove("show");
    mainMenu.classList.remove("active-menu")
    mobMenu.classList.toggle("active-menu")
}

blurR.addEventListener("click",function(e) {
    if(e.target === blurR) {
        hideBlurR()
    }
});