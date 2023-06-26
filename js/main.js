/* ** Lit une balise audio en fonction de l'appui sur une touche.
* 
* @param Event event Un événemet JS.
* */
function playSound(event) {
    let key = event.keyCode;

    document.querySelector('audio[data-key="' + key + '"]').play();
    document.querySelector('.key[data-key="' + key + '"]').classList.add('playing');
}

// Document "keydown" listener

document.addEventListener('keydown', playSound);
