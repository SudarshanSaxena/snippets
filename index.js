let str = 'Sudarshan Saxena'.split('');
let contentContainer = document.querySelector('.content');
let blinker = document.querySelector('.blinker');

console.log(contentContainer);
console.log(str);

let i = 0;
let opacity = 1;

setInterval(() => {
  if (i < str.length) {
    console.log(str[i]);
    contentContainer.innerHTML += `${str[i]}`
    i++;
  }
}, 200)


let blinkerMod = setInterval(() => {
  blinker.style.opacity = opacity;
  opacity === 1 ? opacity = 0 : opacity = 1;
  if (i == str.length) {
    clearInterval(blinkerMod)
  }
}, 100)



