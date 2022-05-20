const moves = document.getElementById("move");
const images = document.querySelectorAll("img");

let start = 0;
function move(){
    start++
    if(start>images.length-1){
        start=0;
    }
    moves.style.transform   =`translateX(${-start*80}%)`;
}
setInterval(move,2000)

