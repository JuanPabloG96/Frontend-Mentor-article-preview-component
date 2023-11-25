const shareBtn = document.querySelectorAll(".btn--share");
const shareSection = document.querySelector(".card__share");
const socialIcon = document.querySelectorAll(".social-icon");

shareBtn.forEach(btn =>{
  btn.addEventListener('mouseover', ()=>{
    shareSection.classList.toggle("show");
  })
})

socialIcon.forEach(icon =>{
  icon.addEventListener('click', ()=>{
    shareSection.classList.toggle("show");
  })
})
window.addEventListener('click', ()=> {
  shareSection.classList.remove("show")
})