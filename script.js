const keys = document.getElementsByClassName("key")

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g','h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u','v', 'w', 'x', 'y', 'z']

let val1 = Math.floor(Math.random()*26);
let val2 = Math.floor(Math.random()*26);
let val3 = Math.floor(Math.random()*26);
let val4 = Math.floor(Math.random()*26);
let val5 = Math.floor(Math.random()*26);


const l1 = document.getElementById('l1');
const l2 = document.getElementById('l2');
const l3 = document.getElementById('l3');
const l4 = document.getElementById('l4');
const lock = document.getElementById('lock');
const l5 = document.getElementById('l5');
const l6 = document.getElementById('l6');
const l7 = document.getElementById('l7');
const l8 = document.getElementById('l8');

lock.innerHTML = alphabet[val1];
l5.innerHTML = alphabet[val2];
l6.innerHTML = alphabet[val3];
l7.innerHTML = alphabet[val4];
l8.innerHTML = alphabet[val5];



function light() {
    let pressedkey;
    if (event.key === " ") {
        pressedkey = "space";
    } else {
        pressedkey = event.key;
    }
    const keyElement = document.querySelector(`.${pressedkey}`)
    if (keyElement) {
        keyElement.classList.add('lit-up');
    }
    if (pressedkey === lock.textContent) {
        val5 = Math.floor(Math.random()*26);
        l1.innerHTML = l2.innerHTML;
        l2.innerHTML = l3.innerHTML;
        l3.innerHTML = l4.innerHTML;
        l4.innerHTML = lock.innerHTML;
        lock.innerHTML = l5.innerHTML;
        l5.innerHTML = l6.innerHTML;
        l6.innerHTML = l7.innerHTML;
        l7.innerHTML = l8.innerHTML;
        l8.innerHTML = alphabet[val5];
    }
}
function unlight() {
    let pressedkey;
    if (event.key === " ") {
        pressedkey = "space";
    } else {
        pressedkey = event.key;
    }
    const keyElement = document.querySelector(`.${pressedkey}`)
    if (keyElement) {
        keyElement.classList.remove('lit-up');
    }
}



document.addEventListener('keydown', light);
document.addEventListener('keyup', unlight);
