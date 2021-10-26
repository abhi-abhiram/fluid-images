
const modal = document.querySelector('.modal-img');
const preview = document.querySelectorAll('.image-container img');
const original = document.querySelector('.full-img');

preview.forEach((preview) => {
    preview.addEventListener('click', ()=> {
        modal.classList.add('open');
        original.classList.add('open');
        const url = preview.getAttribute('url-data');
        original.src = `./images/${url}`;
    })
})

modal.addEventListener('click', (event)=>{
    console.log(event)
    if(event.target.className!="full-img"){
        modal.classList.remove('open');
        original.classList.remove('open');
    }
});