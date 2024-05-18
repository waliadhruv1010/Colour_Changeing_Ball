var ball = document.querySelector("#bulb");
var btn = document.querySelector("button");


btn.addEventListener("click",function(){
   ball.style.backgroundColor=`#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
})