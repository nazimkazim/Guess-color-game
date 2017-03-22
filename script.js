var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");

var pickedColor = pickColor();
//console.log(pickedColor);

var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var numSquares = 6;


easyBtn.addEventListener("click",function(){
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  numSquares =3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent="";
  for(var i=0; i<squares.length;i++) {
    if (colors[i]) {
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }

})

hardBtn.addEventListener("click",function(){
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent="";
  for(var i=0; i<squares.length;i++) {
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } 
      
    
  })

reset.addEventListener("click",function(){
  //generate all new colors
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  this.textContent = "New Colors";
  messageDisplay.textContent="";
  //change colors of squares
  for(var i =0;i<squares.length; i++) {
    squares[i].style.background = colors[i];
  }
  h1.style.background = "steelblue";

})



colorDisplay.textContent = pickedColor;

for(var i=0; i<squares.length; i++) {
  
  //add initial colors to squares
  squares[i].style.background = colors[i];
  // addclickListenr to squares
  squares[i].addEventListener("click", function() {
    var clickedColor = this.style.background;
    //console.log(clickedColor);
    //alert(this.style.background);
  //compare color to pickedcolor
    if(clickedColor === pickedColor) {
      //alert("Correct!");
      messageDisplay.textContent = "Correct!";
      reset.textContent = "Play Again?"
      changeColors(clickedColor);
      h1.style.background = clickedColor; 
    } 
    
    else {
      this.style.background="#232323";
      //alert("Doona understand!");
      messageDisplay.textContent = "Try again";
    } 
    
  });
  
}

function changeColors(color) {
  // loop through all squares
  //change each color to match given color
  for(var i=0;i<squares.length;i++) {
    squares[i].style.background = color;

  }
}

function pickColor() {

  var random = Math.floor(Math.random()*colors.length);
  return colors[random];

}

function generateRandomColors(num) {
  //make an array
  var arr=[]
  //add num random colors to array
  for(var i=0;i<num;i++) {
    //get random color and push into array
    arr.push(randomColor());
  }
  // return that array
  return arr;

}

function randomColor(){
  //pick a "red" from 0-255
  var r = Math.floor(Math.random()*256);
  // pick a "green" from 0-255
  var g = Math.floor(Math.random()*256);
  // pick a "blue from 0-255"
  var b = Math.floor(Math.random()*256);
  
  return "rgb(" + r + ", " + g + ", " + b + ")";
}