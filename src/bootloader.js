class Bootloader extends Phaser.Scene {
    constructor(){
        super('Bootloader');
    }
    //Esto es lo que saldra cuando se inicie el proyecto
    init(){
        console.log('Soy init');
    }
    //Esto arranca todos los assets
    preload(){
        console.log('Soy bootloader');
        //Cargamos todas las imagenes en memoria aqui
        this.load.image('body','./assets/body.png');
        this.load.image('food','./assets/food.png');
        this.load.image('table','./assets/tablero.png');
        
        //Ahora vamos a cargar las fuentes que vamos a usar para nuestra puntuacion y la pantalla de menu y gameOver

        this.load.json('fontJSON','./assets/font/font.json');
        this.load.image('font','./assets/font/font.png');

        this.load.on('complete',()=>{
            //Con esto importamos la fuente que esta ya creada
            const fontJSON = this.cache.json.get('fontJSON');
            this.cache.bitmapFont.add('pixel',Phaser.GameObjects.RetroFont.Parse(this,fontJSON));

            this.scene.start('Menu');
        });
    }
    
    //Y con update tenemos el bucle del juego, es decit aquello que esta pasando durante el juego constantemente
   /* update(){
        console.log('Soy el update');
    }*/
}
export default Bootloader;