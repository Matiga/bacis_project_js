const menuItems = [
    {
        id:1,
        item:'Food Item1',
        oneliner :"Lorem ipsum dolor sit, amet consectetur adipisicing",
        img: "images/pic1.jpg",
        hotel: "Hotel name1",
        decs :"Lorem ipsum dolor sit, amet consectetur adipisicing"
    }, 
    {
        id:2,
        item:'Food Item2',
        oneliner :"Lorem ipsum dolor sit, amet consectetur adipisicing",
        img: "imges/pic2.jpg",
        hotel: "Hotel name2",
        decs :" two Lorem ipsum dolor sit, amet consectetur adipisicing"
    }, 
    {
        id:3,
        item:'Food Item3',
        oneliner :"Lorem ipsum dolor sit, amet consectetur adipisicing",
        img: "images/pic3.jpg",
        hotel: "Hotel name3",
        decs :"three Lorem ipsum dolor sit, amet consectetur adipisicing"
    },                   
]
const item= document.getElementById('item');
const oneLiner = document.getElementById('oneLiner');
const img = document.getElementById('img');
const hotel = document.getElementById('hotel');
const desc = document.getElementById('desc');
const prev = document.getElementById('prev');
const random = document.getElementById('random');
const next = document.getElementById('next');

let currentMenu = 0;
window.addEventListener('DOMContentLoaded',function(){
    //let menu = menuItems[currentMenu];
    //item.textContent = menu.item;
    //oneLiner.textContent=menu.oneliner;
    //img.src=menu.img;
    //hotel.textContent = menu.hotel;
    //desc.textContent=menu.dec;
    allMenu(currentMenu);
})
const allMenu=()=>{
    let menu = menuItems[currentMenu];
    item.textContent = menu.item;
    oneLiner.textContent=menu.oneliner;
    img.src=menu.img;
    hotel.textContent = menu.hotel;
    desc.textContent=menu.decs;
}
//random menu
random.addEventListener('click',()=>{
    currentMenu =Math.floor(Math.random()*menuItems.length);
    //console.log(currentMenu)
    allMenu(currentMenu)
})
//prev btn
prev.addEventListener('click',()=>{
    currentMenu--;
    if(currentMenu<0){
        currentMenu = menuItems.length-1;
    }
    allMenu(currentMenu)
})
//
next.addEventListener('click',()=>{
    currentMenu++;
    if(currentMenu > menuItems.length-1){
         currentMenu = 0;
    }
    allMenu(currentMenu);
})



