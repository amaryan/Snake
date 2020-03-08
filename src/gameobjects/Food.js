class Food{
    constructor(scene){
        this.scene = scene;
        //Añadimos la comida como grupo para que la cabeza de la serpiente acceda al grupo en si no solo a una parte del objeto
        this.food = this.scene.physics.add.group({
            key : 'food',
            setXY:{
                x:30,
                y:30
            }
        });
       //Con esto cambiamos la profundidad de la comida para que este detras de la serpiente y no delante
        this.food.getChildren()[0].setOrigin(0).setDepth(-1);
        //Aqui definimos el intervalo de tiempo en el que se va a llamar a la funcion de crear comida que hemos puesto que sea de 2 segundos
        //Y usamos setTimeOut para que solo se llame una vez a diferencia del internate que se llama constantemente(solo para probar que funcione)
      /*  setTimeout(()=>{
            this.createFood();
        },2000);*/
    }
    /**
     * Con esta funcion vamos a crear la comida aleatoriamente
     */
    createFood(){
        //Esto en phaser es como un Random y genera la comida en valores random en x e y
        let x = Phaser.Math.Between(30,this.scene.sys.game.config.width - 30);
        let y = Phaser.Math.Between(30,this.scene.sys.game.config.height - 30);

        //Ahora con esto redondeamos las posiciones para que la comida coja valores redondos y coincida perfectamente con la serpiente
        x = Phaser.Math.Snap.To(x,10);
        y = Phaser.Math.Snap.To(y,10);

        //Pero antes de crear la comida hay que destruirla... Asique cuando se cree la siguiente se detruye la anterior
        this.food.getChildren()[0].destroy();
        this.food.create(x,y,'food');
        this.food.getChildren()[0].setOrigin(0).setDepth(-1);
    }
}

export default Food;