const keys = document.getElementsByClassName("key")




function light() {
    const pressedkey = event.key;
    const keyElement = document.querySelector(`.${pressedkey}`)
    if (keyElement) {
        keyElement.classList.add('lit-up');
    }
}


document.addEventListener('keydown', light);