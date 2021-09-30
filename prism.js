var c = "";

function initializeCanvas(name){
c = document.getElementById(name);
}

function drawPrism(offx, offy, l, w, h, r){
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.clearRect(0, 0, c.width, c.height);
for(i = 0; i < l; i++){
if(i<l-2){
ctx.fillStyle = "darkgrey";
}
ctx.fillRect(i*r+offx, i+offy, w, h);
if(i == l-2){
ctx.fillStyle = "lightgrey";
}
}
ctx.stroke();
}
