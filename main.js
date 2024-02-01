canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
backround_img="mars.jpg";
rover_img="rover.png";
rover_x=10;
rover_y=10;
rover_width=100;
rover_height=90;
function add(){
bg=new Image();
bg.onload=uploadbg;
bg.src=backround_img;
rover=new Image();
rover.onload=uploadrover;
rover.src=rover_img;
}
function uploadbg(){
    ctx.drawImage(bg,0,0,canvas.width,canvas.height);

}
function uploadrover(){
    ctx.drawImage(rover,rover_x, rover_y, rover_width,rover_height);
}
window.addEventListener("keydown", my_keydown);
 function my_keydown (e)
 {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38')
    {
        up();
        console.log("up");
    }
    if (keyPressed == '40')
    {
        down();
        console.log("down");
    }
    if (keyPressed == '37')
    {
        left();
        console.log("left");
    }
    if (keyPressed == '39')
    {
        right();
        console.log("right");
    }
 }
 function up()
 {
    if(rover_y >=0)
    {
        rover_y = rover_y - 10;
        console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y);
        uploadbg();
        uploadrover();

    }
 }
 function down()
 {
    if(rover_y <=500)
    {
        rover_y = rover_y + 10;
        console.log("When down arrow is pressed, x = " + rover_x + " | y = " +rover_y);
        uploadbg();
        uploadrover();

    }
 }
 function left()
 {
    if(rover_x >=0)
    {
        rover_x = rover_x - 10;
        console.log("When left arrow is pressed, x = " + rover_x + " | y = " +rover_y);
        uploadbg();
        uploadrover();

    }
 }
 function right()
 {
    if(rover_x <=700)
    {
        rover_x = rover_x + 10;
        console.log("When right arrow is pressed, x = " + rover_x + " | y = " +rover_y);
        uploadbg();
        uploadrover();

    }
 }