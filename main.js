canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

mouseevent = ""

color = "red"
width = 3
radius = 2

canvas.addEventListener("mousedown", my_mousedown)

function my_mousedown(e){
    
    color = document.getElementById("color").value
    width = document.getElementById("width of line").value
    radius = document.getElementById("radius").value

    mouseevent =  "mousedown"
}

canvas.addEventListener("mousemove", my_mousemove)

function my_mousemove(e){

    x = e.clientX - canvas.offsetLeft;
    y = e.clientY - canvas.offsetTop;

    if (mouseevent == "mousedown") { 
        console.log("Current position of x and y coordinates = "); 
        console.log("x = " + x + "y = " + y); 
        ctx.beginPath(); ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.arc(x, y, radius ,0 , 2 * Math.PI);
        ctx.stroke(); 
    } 

}

canvas.addEventListener("mouseup", my_mouseup)

function my_mouseup(){

    mouseevent = "mouseup"

}

canvas.addEventListener("mouseleave", my_mouseleave)

function my_mouseleave(){

    mouseevent = "mouseleave"

}