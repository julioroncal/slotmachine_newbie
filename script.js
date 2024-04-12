const buttons = document.querySelectorAll('.button');
const playButton = document.querySelector('.play-button');

// Function to generate a random color (excluding black)
function getRandomColor() {
  let color = '#' + Math.floor(Math.random()*16777215).toString(16);
  while (color === '#000000') {
    color = '#' + Math.floor(Math.random()*16777215).toString(16);
  }
  return color;
}

// Function to change button colors and text (rainbow effect)
function rainbowEffect(button) {
  const rainbowText = button.dataset.rainbow;
  let colorIndex = 0;
  const colors = ['red', 'orange', 'yellow', 'green'];

  setInterval(() => {
    button.style.backgroundColor = getRandomColor();
    button.style.color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
  }, 1500);
}

// Function to handle button click (enlarging and changing color)
function handleClick(button) {
  button.style.backgroundColor = getRandomColor();
  button.style.transform = 'scale(1.1)';
  setTimeout(() => {
    button.style.transform = 'scale(1)';
  }, 100);
}

// Add rainbow effect to buttons with "rainbow" data attribute
buttons.forEach(button => {
  if (button.dataset.rainbow) {
    rainbowEffect(button);
    button.classList.add('rainbow');
  }
});

// Add click event listener to all buttons
buttons.forEach(button => {
  button.addEventListener('click', () => handleClick(button));
});

// Add click event listener to play button (for future functionality)
playButton.addEventListener('click', () => {
  // Add your play button functionality here
  console.log('Play button clicked!');
});//
