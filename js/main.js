/* ** Sélectionne visuellement la touche préssée dans l'élément .pad.
* 
* @param Event event Un événement clavier.
* */
function selectKey(event) {
    console.log(event.keyCode);
    document.querySelector('.key[data-key="' + event.keyCode + '"]').style.background = 'black';
}

// Document "keydown" listener

document.addEventListener('keydown', selectKey);
