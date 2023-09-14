const keys = document.getElementsByClassName("key")

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g','h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u','v', 'w', 'x', 'y', 'z']




const lock = document.getElementById('lock');
let val1 = Math.floor(Math.random()*26);
lock.innerHTML = alphabet[val1];

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
        val1 = Math.floor(Math.random()*26);
        lock.innerHTML = alphabet[val1];
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
