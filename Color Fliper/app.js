
const color = document.querySelector(".colorName");
const btn = document.querySelector("#btn");
const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

btn.addEventListener("click",function(){
     hexCode ="#";
    for(i=0; i<6;i++){
        hexCode += hex[getRandomCode()]
    }
    color.textContent = hexCode;
    document.body.style.backgroundColor = hexCode;
})

function getRandomCode(){
    return Math.floor(Math.random()*hex.length);
} 