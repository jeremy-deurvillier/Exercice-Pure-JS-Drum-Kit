/* ** Remet le style par défaut des pads
* 
* @param Event event Un événement JS.
* */
function removeTransition(event) {console.log(event);
    document.querySelector('.key[data-key="' + event.keyCode + '"]').classList.remove('playing');
}

/* ** Lit une balise audio en fonction de l'appui sur une touche.
* 
* @param Event event Un événemet JS.
* */
function playSound(event) {
    let key = event.keyCode;
    let currentAudio = (document.querySelector('audio[data-key="' + key + '"]'))?document.querySelector('audio[data-key="' + key + '"]'):null;

    if (currentAudio) currentAudio.play();

    document.querySelector('.key[data-key="' + key + '"]').classList.add('playing');

    // Possibilité d'utiliser l'event "transitionend" pour détecter la fin des transitions CSS.
    //document.querySelector('.key[data-key="' + key + '"]').addEventListener('transitionend', removeTransition);
}

// Document "keydown" and "keyup" listener

document.addEventListener('keydown', playSound);
document.addEventListener('keyup', removeTransition);
