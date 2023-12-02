const stylwSwitcherToggler = document.querySelector(".style-switcher-toggler");
stylwSwitcherToggler.addEventListener("click",()=>{
    document.querySelector(".style-switcher").classList.toggle("open");
})

window.addEventListener("scroll",()=>{
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
// theme color
const alternateStyle = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    localStorage.setItem("color",color);
    changeColor();
}
function changeColor(){
    alternateStyle.forEach((style)=>{
        if(localStorage.getItem("color") === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true");
        }

    })
}

// dark mode

const DayNight=document.querySelector(".day-night");

DayNight.addEventListener("click",()=>{
   
        DayNight.querySelector("i").classList.toggle("fa-sun");
        DayNight.querySelector("i").classList.toggle("fa-moon");
        document.body.classList.toggle("dark");
 
})

window.addEventListener("load",()=>{
    if (document.body.classList.contains("dark"))
    {
        DayNight.querySelector("i").classList.add("fa-sun");
    }
    else{
        DayNight.querySelector("i").classList.add("fa-moon");
    }
})