const logo = document.getElementById('myImg');
const imgModal = document.getElementById('imgModal');
const close = document.getElementById('close');
const img= document.getElementById('img');
const description= document.getElementById('description');

logo.addEventListener('click',()=>{
    imgModal.style.display='block';
    description.innerHTML = "Our Services";
    img.src="images/2.png";
});
 close.addEventListener('click',()=>{
     imgModal.style.display="none";
 })

