const toggleButton = document.querySelector('.nav-toggler');
const navBody  = document.querySelector('.nav-body')

toggleButton.addEventListener('click', ()=>{
    navBody.classList.toggle('active')
})