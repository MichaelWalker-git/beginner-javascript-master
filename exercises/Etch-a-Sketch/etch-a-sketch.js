// Select the elements on the page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');

const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');
// its in caps and underscore because when its a true constant meaning the value will not change
const MOVE_AMOUNT = 20;

// setup our canvas for drawing
// short hand for const width = canvas.width;
// short hand for const width = canvas.height;x
// make a variable called height and width from the same properties on our canvas
const { width, height } = canvas;

// create random x and y starting point on the canvas
// Math.floor gives you the lower level value of a number
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * width);

console.log(width, height);
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

let hue = 0;
// changes the color of the stroke
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath(); // start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
// context.stroke is to draw
ctx.stroke();

// write a draw function
// curly brackets is called object destructuring where you can take properties and rename them into proper variables. Allows me to have shorter variable names inside of our objects
function draw({ key }) {
  console.log(key);
  //   increment the hue
  hue += 10;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  //   start the path
  ctx.beginPath();
  ctx.moveTo(x, y);
  // move our x and y values depending on what the user did
  //   switch statement takes in a variable like the 'key' depending on cases we have four. Each case should have a different outcome. Switch statement will allow us to say based on these four different outcomes do the following.
  switch (key) {
    //   Similar to if(key === 'ArrowUp');
    // switch statement should always have a default case, keyword is break. After every single case it will stop the switch from running, skip over the rest because we did what we needed to do and move to the next line.
    case 'ArrowUp':
      y -= MOVE_AMOUNT;
      break;
    case 'ArrowRight':
      x += MOVE_AMOUNT;
      break;
    case 'ArrowDown':
      y += MOVE_AMOUNT;
      break;
    case 'ArrowLeft':
      x -= MOVE_AMOUNT;
      break;
    default:
      break;
  }
  ctx.lineTo(x, y);3
  ctx.stroke();
}

// write a handler for the MSMediaKeySession
function handleKey(e) {
  // *check if its an arrow
  if (e.key.includes('Arrow')) {
    //    preventDefault is because arrow keys scroll the page up and down by default
    e.preventDefault();
    // then pass it along to the draw function
    // now the draw function has an Object passed in and inside of that theres a property called key and it tells you if its arrow up
    draw({ key: e.key });
  }
}
// clear /shke function
function clearCanvas() {
  canvas.classList.add('shake');
}
// listen for arrow keys
// if you wanna listen site wide you use window
// *listner is listening for 'keydown', then runs handleKey
window.addEventListener('keydown', handleKey);
