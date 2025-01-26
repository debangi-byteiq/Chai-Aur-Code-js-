##projects related to events



##project link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

#Solution code

##project 1

```javascript
//generate a random colour

const randomColour = () => {
  const hex = '0123456789ABCDEF';
  let colour = '#';
  for (let i = 0; i < 6; i++) {
    colour += hex[Math.floor(Math.random() * 16)];
  }
  return colour;
};
let intervalId
const startChangingColour = () => {

  const changeBgColour = () => {
    document.body.style.backgroundColor = randomColour();
  };
  if (!intervalId){
    intervalId = setInterval(changeBgColour, 1000);
  }//safety check
 
};

const stopChangingColour = ()=>{
clearInterval(intervalId) 
//flush out interval id, to prevent problems due to overwriting-> better way to write cleaner code
intervalId = null; //to free memeory, dereferencing value
}
document.querySelector('#start').addEventListener('click', startChangingColour);

document.querySelector('#stop').addEventListener('click', stopChangingColour);


```


##project 2

```javascript
console.log('Project 5');

const insert = document.getElementById('insert')

window.addEventListener('keydown', (e) =>{
  insert.innerHTML = <div class='color'>
    <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' '? 'space' : e.key}</td>
    <td>${e.keycode}</td>
    <td>${e.code}</td>
  </tr>
</table>
  </div>
})
```

