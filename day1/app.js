const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');

//this one for target color on style for js
//colorBtn.addEventListener('click',()=>{
   // bodyBcg.style.backgroundColor="red";
//})

const colors =["yellow",'red','green','#3b5998']

colorBtn.addEventListener('click',changColor)

function changColor(){
    //bodyBcg.style.backgroundColor = colors[1];
    let random = Math.floor(Math.random()*colors.length);
    bodyBcg.style.backgroundColor = colors[random];
}
