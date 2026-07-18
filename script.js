setInterval(()=>{

document.getElementById("fps").innerHTML=Math.floor(Math.random()*30)+60;

document.getElementById("ping").innerHTML=Math.floor(Math.random()*40)+20;

},1000);

window.addEventListener("message",(e)=>{

console.log(e.data);

});
