import Snake from '../gameobjects/Snake.js';
import Food from '../gameobjects/Food.js';
class Play extends Phaser.Scene {
    constructor(){
        super('Play');
    }
    //Esto arranca todos los assets
    preload(){
        console.log('Escena Play');
        //Aqui creamos el objeto Snake y le pasamos de referencia la escena (this)
        this.snake = new Snake(this);
        this.food = new Food(this);
    }

    create(){
        //Con launch se pueden crear mejor pantallas en las que aparece informacion como la puntuacion... etc
        //Y llamamos a UI
        this.scene.launch('UI');
        const uiScene = this.scene.get('UI');
        //Aqui vamos a darle valor a las teclas del teclado para mover la serpiente
        this.input.keyboard.on('keydown_RIGHT',() =>{
           this.snake.changeMov('right');
        });
        this.input.keyboard.on('keydown_LEFT',() =>{
            this.snake.changeMov('left');
        });
        this.input.keyboard.on('keydown_UP',() =>{
            this.snake.changeMov('up');
        });
        this.input.keyboard.on('keydown_DOWN',() =>{
            this.snake.changeMov('down');
        });

        //Ahora cuando la serpiente colisione con la comida... Solo la cabeza! de ahi que coja la posicion 0 
        this.physics.add.collider(this.snake.body[0],this.food.food, ()=>{
            //Cuando esta colision ocurra aparece la comida nueva y desaparece la que ha sido comida y la serpiente crece
            this.food.createFood();
            this.snake.grow();
            uiScene.addPoints();
        });
    }
    update(time){
        this.snake.update(time);
    }
 
}
export default Play;