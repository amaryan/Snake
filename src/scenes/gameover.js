class GameOver extends Phaser.Scene {
    constructor(){
        super('GameOver');
    }
    preload(){
      
    }
    //Ponemos el texto de GameOver
    create(){
        this.scene.stop('UI');
    this.add.dynamicBitmapText(this.sys.game.config.width/2,
        this.sys.game.config.height/2-30,'pixel','GAME OVER',20)
        .setOrigin(0.5);

        //Estos son los diferentes eventos que van a hacer que salgas de la pantalla de GameOver
         this.event = setTimeout(() =>{
            this.exit();
        },5000);
        this.input.keyboard.on('keydown_ENTER',()=>{
            this.exit();
        });
        this.input.on('pointerdown',()=>{
            this.exit();
        });
    }
    exit(){
        //Esto es para evitar un error con el timeout
        clearTimeout(this.event);
        this.scene.start('Menu');
    }
}
export default GameOver;