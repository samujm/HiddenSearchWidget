const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')
const actives = document.querySelectorAll('.active')


btn.addEventListener('click',()=>{
        search.classList.toggle('active')
        input.focus()
})

