const usdbtn = document.querySelector('.usdbtn')
const langbtn = document.querySelector('.langbtn')
const submenu = document.querySelector('.usd-subMenu')
const langmenu = document.querySelector('.lang-subMenu')

usdbtn.addEventListener("click",()=>{
    submenu.classList.toggle("active");
})

langbtn.addEventListener("click", ()=>{
    langmenu.classList.toggle("active");

})
