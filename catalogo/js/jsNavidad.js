function abrirMenuNavidad() {
    const menuNavidad = document.querySelector('.dropdown');
    menuNavidad.classList.toggle('press');
}
let sound = new Audio('./audio/All I Want For Christmas Is You.mp3');
function sonidoPlay() {
    debugger
    sound.play();
    debugger
}
const test = document.getElementById("body");

// This handler will be executed only once when the cursor
// moves over the unordered list
$(document).ready(function(){
    $(".cargar").click();
 });
// while(sound.paused){
//     debugger
//     sonidoPlay()
// }

