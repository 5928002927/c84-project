function add() {
    background_imgTag = https://i.ytimg.com/vi/S-1UODpEI3o/maxresdefault.jpg;
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = https://i.ytimg.com/vi/S-1UODpEI3o/maxresdefault.jpg;

    rover_imgTag = https://tse1.mm.bing.net/th?id=OIP.rvtUncYnPubE4NLKQ8uQPgHaCL&pid=Api&P=0&w=567&h=167;
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src =https://tse1.mm.bing.net/th?id=OIP.rvtUncYnPubE4NLKQ8uQPgHaCL&pid=Api&P=0&w=567&h=167; 
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}


function uploadrover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}


function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
 if(keyPressed == '38')
{
    up();
    console.log("up");
}


if(keyPressed == '40')
{
    down();
    console.log("down");
}

if(keyPressed == '37')
{
    left();
    console.log("left");
}

if(keyPressed == '39')
{
    right();
    console.log("right");
}

}