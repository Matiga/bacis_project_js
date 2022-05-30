const textareaEl = document.getElementById('textarea');
const totalCounterEl = document.getElementById('total-counter');
const remainEl = document.getElementById('remaining-counter')
textareaEl.addEventListener("keyup",()=>{
    updateCounter()
})
updateCounter()//display total = 0 and remaining=50

function updateCounter(){
    totalCounterEl.innerText = textareaEl.value.length
    remainEl.innerText = textareaEl.getAttribute("maxLength") - textareaEl.value.length;
}
