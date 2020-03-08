import Bootloader from './bootloader.js';
import Play from './scenes/play.js';
import GameOver from './scenes/gameover.js';
import UI from './scenes/UI.js';
import Menu from './scenes/menu.js';


//Sin una configuracion solo veriamos la pantalla de phaser en blanco, con esto ponemos unos minimos
const config = {
    title : 'snake',
    width: 320,
    height: 180,
    type: Phaser.AUTO,
    parent: 'container',
    backgroundColor:'#f9ca24',
    pixelArt: true,
   //Con esta parte de aqui abajo he comprobado que se le añaden las fisicas bien por lo tanto todo funciona correctamente
    physics:{
        default: "arcade",
        /*arcade:{
             Esto basicamente hace que el cuerpo de la serpiente caiga hacia abajo
            gravity: { y: 100 }
        }*/
    },
    //Como vemos aqui primero cargamos todo lo que este dentro de bootloader y luego lo de play
    scene:[Bootloader,Play,GameOver,UI,Menu]
};
//con esto iniciamos phaser pasandole como parametros la configuracion que hemos creado
new Phaser.Game(config);