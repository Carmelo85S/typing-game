// Variables for the DOM elements
// Array
const words = [
  "dependent",
  "dog",
  "superficial",
  "admit",
  "juice",
  "javascript",
  "developer",
  "airplane",
  "great",
  "fun",
  "manipulate",
  "cat",
  "transition",
  "school",
  "computer",
  "programming",
  "drag",
  "loving",
  "north",
];

//declare a variable length with value array length. This will be a number
const length = words.length;

//select element
const h1 = document.querySelector("h1");
const input = document.querySelector("input");
const score = document.getElementById("score");
const timer = document.getElementById("time");
const settingBtn = document.getElementById("settings-btn");
const difficultySelect = document.getElementById("difficulty");

//declare initial score point
let userScore = 0;

//declare initial time
let timeDisplayed = 10;

//Generate randomIndex and update h1 with random word
const addWordToDom = (length) => {

  //generate random index between 0 and length
  const randomIndex = Math.floor(Math.random() * length);

  //randomWord is thr word related to the randomIndex
  const randomWord = words[randomIndex];

  //randomWord is passed to h1 element
  h1.innerText = randomWord;
}

//Call the function
addWordToDom(length);

//Check if the word in input is === word displayed
input.addEventListener("keypress", (e) => {

  //proceed only if Enter is pressed
  if(e.key === "Enter"){

    //take the h1 and unser input value
    const randomWord = h1.innerText;
    const userWord = e.target.value;

    // Check if the user input matches the displayed word, update the score + 1 and increase time +
    if (userWord === randomWord) {

      //call updateScore function
      updateScore();

      //call increaseTime function
      incrementTime();

      // if match clear the input
      e.target.value = "";

      // Display a new word
      addWordToDom(length);
    }
  }
})

//Hide setting bar
settingBtn.addEventListener("click", function () {
  const settingsBar = document.getElementById("settings");
  
  // Toggle between "none" and "flex"
  if (settingsBar.style.display === "none") {
    settingsBar.style.display = "flex";
  } else {
    settingsBar.style.display = "none";
  }
});


//Update score function
const updateScore = () => {
  //increase score point by 1
  userScore++;
  //the element with id score will display the userScore points
  score.innerHTML = userScore;
}

//incrementTime function
  const incrementTime = () => {
    const difficulty = difficultySelect.value;
    if (difficulty === "easy") {
      timeDisplayed += 5;
    } else if (difficulty === "medium") {
      timeDisplayed += 3;
    } else {
      timeDisplayed += 2;
    }
  };

//countdown
const updateTime = () => {
  timeDisplayed--;
  timer.innerHTML = `${timeDisplayed}s`;
  //it timeDisplayed is === 0, 
  if(timeDisplayed === 0){
    clearInterval(stopCountdown);
    alert("Game Over");
  }
}
const stopCountdown = setInterval(updateTime, 1000)

