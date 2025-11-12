const menuOpenlButton = document.querySelector("#menu-open-button");
const menucloseButton = document.querySelector("#menu-close-button")
menuOpenlButton.addEventListener("click", () =>{
    // toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu")
} )
menucloseButton.addEventListener("click", ()=>{
    document.body.classList.toggle("show-mobile-menu")
})

