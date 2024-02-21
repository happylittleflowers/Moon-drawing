// Canvas - Moon scene

// Canvas Setup
var cnv = document.getElementById("myCanvas");
var ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

// top-left corner (0,0)
// top-right corner (400,0)
// bottom-left corner (0,400)
// bottom-right corner (400,400)

// Sky
ctx.fillStyle = "black";
ctx.fillRect(0, 0, 400, 300);

// Water
ctx.fillStyle = "darkblue";
ctx.fillRect(0, 160, 490, 300);

// Moon
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(234, 76, 49, 0, 35 * Math.PI);
ctx.fill();

// Blur lights 1
ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(25, 147, 10, 0, 2 * Math.PI);
ctx.fill();

// Blur lights 2
ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(69, 147, 10, 0, 2 * Math.PI);
ctx.fill();

// Blur lights 3
ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(115, 147, 10, 0, 2 * Math.PI);
ctx.fill();

// Blur lights 4
ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(155, 147, 10, 0, 2 * Math.PI);
ctx.fill();

// Blur lights 5
ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(198, 147, 10, 0, 2 * Math.PI);
ctx.fill();

// Blur lights 6
ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(235, 147, 10, 0, 2 * Math.PI);
ctx.fill();

// Blur lights 7
ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(276, 147, 10, 0, 2 * Math.PI);
ctx.fill();

// Blur lights 8
ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(325, 147, 10, 0, 2 * Math.PI);
ctx.fill();

// Blur lights 9
ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(368, 147, 10, 0, 2 * Math.PI);
ctx.fill();

// Text
ctx.font = "15px Arial";
ctx.fillStyle = "white";
ctx.fillText("Art by Priyanka B", 20, 390);

// Shark Image
var sharkImg = document.getElementById("shark");
ctx.drawImage(sharkImg, 15, 214, 125, 90);

// Fish Head 1
ctx.fillStyle = "blue";
ctx.beginPath();
ctx.arc(220, 300, 10, 0, 2 * Math.PI);
ctx.fill();

// Fish Tail 1
ctx.beginPath();
ctx.moveTo(220, 300);
ctx.lineTo(240, 290);
ctx.lineTo(240, 310);
ctx.fill();

// Fish Head 2
ctx.fillStyle = "cyan";
ctx.beginPath();
ctx.arc(300, 325, 10, 0, 2 * Math.PI);
ctx.fill();

// Fish Tail 2
ctx.beginPath();
ctx.moveTo(300, 325);
ctx.lineTo(320, 315);
ctx.lineTo(320, 335);
ctx.lineTo(300, 325);
ctx.fill();

// lighthouseImage
var lighthouseImg = document.getElementById("lighthouse");
ctx.drawImage(lighthouseImg, 303, 165, 90, 90);
