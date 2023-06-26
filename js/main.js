/* ** Lit une balise audio en fonction de l'appui sur une touche.
* 
* @param Int key La clé (dataset.key) du son à jouer.
* */
function playSound(key) {
    document.querySelector('audio[data-key="' + key + '"]').play();
}

/* ** Sélectionne visuellement la touche préssée dans l'élément .pad.
* 
* @param Event event Un événement clavier.
* */
function selectKey(event) {
    console.log(event.keyCode);
    document.querySelector('.key[data-key="' + event.keyCode + '"]').style.background = 'black';

    playSound(event.keyCode);
}

// Document "keydown" listener

document.addEventListener('keydown', selectKey);
