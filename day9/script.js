const showModalBtn = document.querySelector('#show-modal-btn');
const modalContainer = document.querySelector('.modal-container');
const closeModalBtn = document.querySelector('#close-modal-btn');

showModalBtn.addEventListener('click',()=>{
    modalContainer.classList.add('show-modal');
})
closeModalBtn.addEventListener('click',()=>{
    modalContainer.classList.remove('show-modal')
})