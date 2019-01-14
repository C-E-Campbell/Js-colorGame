let numOfSquares = 6;
let colors = generateRandomColors(numOfSquares);
let squares = document.getElementsByClassName("square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetBtn = document.getElementById("resetBtn");
let easyBtn = document.getElementById("easyBtn");
let hardBtn = document.getElementById("hardBtn");
colorDisplay.textContent = pickedColor;


hardBtn.addEventListener("click", function () {
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  numOfSquares = 6;
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }
})

easyBtn.addEventListener("click", function () {
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  numOfSquares = 3;
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
})



resetBtn.addEventListener("click", function () {
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  h1.style.backgroundColor = 'steelblue';
  messageDisplay.textContent = "";
  for (let i = 0; i < squares.length; i++) {
    resetBtn.textContent = "New Colors";
    squares[i].style.backgroundColor = colors[i];
  }
})

for (let i = 0; i < squares.length; i++) {

  squares[i].style.backgroundColor = colors[i];

  squares[i].addEventListener("click", function () {

    let clickedColor = this.style.backgroundColor;

    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!"
      resetBtn.textContent = "Play Again?";
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = "rgb(35, 35, 35)";
      messageDisplay.textContent = "Try Again"
    }
  })
}


// this function changes all the squares to be the same color once the correct one is chosen
function changeColors(color) {
  for (i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

// this function uses math random to pick which color in the array will be the "correct" one
function pickColor() {
  let random = Math.floor(Math.random() * colors.length)
  return colors[random];
}

// This function generates a random rgb color
function randomColor() {
  // pick a red from 0 to 255
  let red = Math.floor(Math.random() * 256);
  // pick a green from 0 to 255
  let green = Math.floor(Math.random() * 256);
  // pick a blue from 0 to 255
  let blue = Math.floor(Math.random() * 256);
  return rancolor = `rgb(${red}, ${green}, ${blue})`;
}

// this function pushes all the generated colors to the array
function generateRandomColors(num) {
  // make an array
  let arr = [];
  // repeat num times
  for (let i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  //return that array
  return arr;
}