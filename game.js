let score = 0; // Initialize the score to 0

// Function to check if the mole overlaps with the h1 or h2 elements
function isOverlap(moleX, moleY) {
  const h1 = document.querySelector('h1');
  const h2 = document.querySelector('h2');

  const h1Rect = h1.getBoundingClientRect();
  const h2Rect = h2.getBoundingClientRect();

  return (
    moleX + mole.clientWidth > h1Rect.left &&
    moleX < h1Rect.right &&
    moleY + mole.clientHeight > h1Rect.top &&
    moleY < h1Rect.bottom
  ) || (
    moleX + mole.clientWidth > h2Rect.left &&
    moleX < h2Rect.right &&
    moleY + mole.clientHeight > h2Rect.top &&
    moleY < h2Rect.bottom
  );
}

// Function to show the mole at a random position
function showMole() {
  const mole = document.getElementById('mole');

  // Calculate the random position within the window
  const windowWidth = window.innerWidth - mole.clientWidth;
  const windowHeight = window.innerHeight - mole.clientHeight;

  let randomX, randomY;

  do {
    randomX = Math.floor(Math.random() * windowWidth);
    randomY = Math.floor(Math.random() * windowHeight);
  } while (isOverlap(randomX, randomY));

  // Set the mole's position
  mole.style.left = randomX + 'px';
  mole.style.top = randomY + 'px';

  // Show the mole
  mole.style.display = 'block';
}

// Function to handle the click on the mole
function clickMole() {
  // Increment the score when the mole is clicked
  score++;
  // Update the score display
  document.getElementById('score').textContent = score;
  if(score%20==0){
    window.open("https://www.youtube.com/watch?v=X00djifIj9s","_blank");
}
  }

// Add an event listener to the mole to handle clicks
document.getElementById('mole').addEventListener('click', clickMole);
// Show a new mole every 2 seconds (2000 milliseconds)
setInterval(function() {
  showMole();
}, 1200);

function reset(){
    score=0;
    document.getElementById('score').textContent = 0;
}