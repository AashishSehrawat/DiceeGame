
var randonNumber = Math.floor(Math.random() * 6) + 1;
var randonNumber1 = Math.floor(Math.random() * 6) + 1;

var imageSource = "images/dice" + randonNumber + ".png";
var imageSource1 = "images/dice" + randonNumber1 + ".png";

document.querySelector(".img1").setAttribute("src", imageSource );
document.querySelector(".img2").setAttribute("src", imageSource1 );


if(randonNumber > randonNumber1){
    document.querySelector("h1").innerHTML="🚩Play-1 WINS";
}
else if(randonNumber1 > randonNumber){
    document.querySelector("h1").innerHTML="🚩Play-2 WINS";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}