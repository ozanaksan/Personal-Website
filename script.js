const navId = document.getElementById("nav_menu"),
      ToggleBtnId = document.getElementById("toggle_btn"),
      CloseBtnId = document.getElementById("close_btn");

//SHOW MENU//
ToggleBtnId.addEventListener("click",() => { /*dugmeye basildigi zaman */
    navId.classList.add("show");
    })

//HIDE MENU//
CloseBtnId.addEventListener("click", () => {
    navId.classList.remove("show");

})

//ANIMATE ON SCROLL INITIALIZE MENU//
//GSAP ANIMATIONS//
//LOGO//
//NAV MENU//
//NAV MENU 2//
//TOGGLE BTN//
//MAIN HEADING//
//INFO TEXT//
//CTA BTN//
//MY IMAGE//
