#projects-related to dom

##project link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

#Solution code

##project 1

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


##project 2

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

##project 3

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