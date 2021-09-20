// ================================================
// helper functions
// ================================================
const pickColor = () => {
    const random = Math.floor(Math.random() * colors.length)
    return colors[random]
}

const generateRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

const generateRandomColors = (num) => {
  // make array
  let output = [];
  // add num random colors to array
  for (let i = 0; i < num; i++){
    output.push(generateRandomColor())
  }
return output
}

const changeColors = (colors) => {
  squares.forEach((square) => {
    square.style.background = colors;
  });
}

const reset = () => {
  colors = generateRandomColors(numSquares);
  pickedBackground = pickColor();
  resetButton.textContent = 'New Colors';
  colorDisplay.textContent = pickedBackground;
  for (let i = 0; i < squares.length; i++) {
    if(colors[i]) {
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.background = 'black';
    }
   }
   title.style.background = 'steelblue';
   messageDisplay.textContent = '';
  }

// ================================================
// Init variables
// ================================================
// state
let numSquares = 6;
let colors = generateRandomColors(numSquares);
let pickedBackground = pickColor();
// Select Elements
const squares = document.querySelectorAll('.square');
const colorDisplay = document.getElementById('colorDisplay');
const message = document.getElementById('message');
const title = document.querySelector('h1');
const modeButtons = document.querySelectorAll('.mode');

// ================================================f
// main
// ================================================
  colorDisplay.textContent = pickedBackground;

resetButton.addEventListener('click', function (){
  reset();
})

  modeButtons.forEach((button) => {
    button.addEventListener('click', function() {
      modeButtons[0].classList.remove('selected');
      modeButtons[1].classList.remove('selected');
      this.classList.add('selected');
      if (this.textContent === 'Easy') {
        numSquares = 3;
      } else {
        numSquares = 6;
      }
      reset();
    });
  });

// Set up Square
for (let i = 0; i < squares.length; i++) {
  squares[i].style.background = colors[i];
// Add Click listners
  squares[i].addEventListener("click", function() {
// Get The color of picked square
    const clickedColor = this.style.background;
// Compare that to pickedBackground
    if (clickedColor === pickedBackground) {
      message.textContent = "Correct";
      changeColors(pickedBackground);
      title.style.background = pickedBackground;
      resetButton.textContent = "Play Again?";
    }else {
    this.style.background = "black";
    message.textContent = "You Suck";
    }
  })
}
