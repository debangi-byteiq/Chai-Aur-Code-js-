# projects-related to dom

## project link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
console.log('Hii')
const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach((button) => {
console.log(button);
button.addEventListener('click', (e) =>{
console.log(e.target)
// if(e.target.id === 'grey'){
//   body.style.backgroundColor = e.target.id;
// }
switch(e.target.id){
  case 'grey':
    body.style.backgroundColor = 'grey'
    break
  case "white":
    body.style.backgroundColor = 'white'
    break;
  case "blue":
    body.style.backgroundColor = 'blue'
    break;
  case "yellow": 
  body.style.backgroundColor = 'yellow'
    break;
  case "purple": 
  body.style.backgroundColor = 'purple'
    break;
}
})
});
```


## project 2

```javascript
const form = document.querySelector('form')
// const height = parseInt(document.querySelector('#height').value)
//Above usecase will give empty values because it is extracted before submit event 
form.addEventListener('submit', (e) => {
e.preventDefault()

const height = parseInt(document.querySelector('#height').value)
const weight = parseInt(document.querySelector('#weight').value)
const results = document.querySelector('#results')

if(height === '' || height<0 || isNaN(height)){
  results.innerHTML = `Please give a valid height ${height}`;
}
else if(weight === '' || weight<0 || isNaN(weight)){
  results.innerHTML = `Please give a valid weight ${weight}`;
}else {
  const bmi = (weight / ((height*height)/10000)).toFixed(2)
  results.innerHTML = `<span>${bmi}</span>`;
}

})
```

## project 3

```javascript
const clock = document.getElementById('clock');
// let date = new Date()
// console.log(date.toLocaleTimeString());

setInterval(() => {
  let date = new Date()
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```

## project 4

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const  lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true;
if(playGame){
  submit.addEventListener('click', (e) =>{
    e.preventDefault()
    const guess = parseInt(userInput.value)
    console.log(guess)
    validateGuess(guess)
  })
}
const validateGuess = (guess) => {
  if(isNaN(guess)){
    alert("Please enter a valid number");
  }else if(guess> 100){
    alert("Please enter a number less than 100")
  }else{
    prevGuess.push(guess)
    if(numGuess === 11){
      displayGuess(guess)
      displayMessage(`Game Over, Random number was ${randomNumber}`)
      endGame()
    }else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}
const checkGuess = (guess) =>{
  if (guess === randomNumber){
    displayMessage("You guessed it right")
    endGame()
  }else if(guess < randomNumber){
    displayMessage("Number is too low")
  }else if(guess > randomNumber){
    displayMessage("Number is too high")
  }

}
const displayGuess = (guess) => {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

const endGame = ()=>{
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

const newGame = () =>{
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}
``` 