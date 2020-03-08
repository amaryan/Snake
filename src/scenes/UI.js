class UI extends Phaser.Scene {
    constructor(){
        super('UI');
    }
    preload(){
        console.log('Soy UI');
    }
    create(){
        //Añadimos la barrita rosa donde se ve la puntuacion.. 
        this.add.image(0,0,'table').setOrigin(0);
             //Añadimos el texto que hara de pantalla de puntuacion cogiendo las fuentes que importamos antes
        this.add.dynamicBitmapText(10,7,'pixel','SCORE',8);                               //Con esto rellenamos con 0 todos los huecos del texto y asi este no se mueve
        this.points = this.add.dynamicBitmapText(this.sys.game.config.width - 60, 7 ,'pixel', Phaser.Utils.String.Pad(0,6,0,1), 8);
    }
    addPoints(){
        this.points.setText(
           Phaser.Utils.String.Pad(parseInt(this.points.text) +10,6,0,1)
        );
    }
}
export default UI;