let mixerPortfolio = mixitup('.work_container', {
    selectors: {
        target: '.work_card'
    },
    animation: {
        duration: 300
    }
});
const linkWork = document.querySelectorAll('.work_item')
function activeWork(){
    linkWork.forEach( l=> l.classList.remove('active-work'))
    this.classList.add('active-work')
}
linkWork.forEach( l=> l.addEventListener("click",activeWork)) 

const inputs =document.querySelectorAll(".input");
function focusFunc(){
    let parent =this.parentNode;
    parent.classList.add("focus");
}
function blurFunc(){
    let parent= this.parentNode;
    if(this.value ==""){
        parent.classList.remove("focus");
    }
}
inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
})

const sections= document.querySelectorAll("section[id]");
window.addEventListener("scroll",navHighlighter);
function navHighlighter(){
    let scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50,
        sectionId =current.getAttribute("id");
    
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        document.querySelectorAll('.nav_menu a[href*=' + sectionId + ']').classList.add("active-link")
    }
    else{
        document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove("active-link")
    }
  })
}
const navMenu = document.getElementById('sidebar'),
      navToggle= document.getElementById('nav-toggle'),
      navClose= document.getElementById('nav-close')
if(navToggle){
    navToggle.addEventListener("click", () =>{
        navMenu.classList.add('show-sidebar')
    })
}
if(navClose){
    navClose.addEventListener("click", () =>{
        navMenu.classList.remove('show-sidebar')
    })
}