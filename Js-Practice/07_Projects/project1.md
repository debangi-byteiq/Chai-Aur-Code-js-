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