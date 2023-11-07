// ___________________SLICK SLIDER_________________________


// const usdbtn = document.querySelector('.usdbtn')
// const langbtn = document.querySelector('.langbtn')

// usdbtn.addEventListener("click", ()=>{

var splide = new Splide( '.splide', {
  type   : 'loop',
  perPage: 3,
  perMove: 1,
  fixedWidth : '100%' 
} );

splide.mount();

// })
const searchbtn = document.querySelector(".searchbtn")
searchbtn.addEventListener("click", ()=>{
    
})


const searchContent = document.querySelector('.search-content')
function closeSearchContent() {
    searchContent.style.display = "none"

}
function openSearchContent() {
    searchContent.style.display = "flex"
    searchContent.style.zIndex = "1"
}




