class Snake {
    constructor(scene){
        this.scene = scene;
        //Si no le pusieramos physics seria una imagen plana, sin fisica y no nos sirve para un juego
        this.body = [];
        this.dir = 'left';
        this.timmer = 0;
        //Con esta variable vamos a controlar que no vuelva la serpiente sobre si misma
        this.oldDir = 'right';
        //Este será el tamaño original de la serpiente
        for(let i =0; i<3 ; i++){
            this.body.push(this.scene.physics.add.image(100+ i * 10 , 100 ,'body')
            .setOrigin(0)
            );
        }
        //Con este bucle controlamos que cuando choque consigo misma pase algo DUH~!
        for(let i =1; i<10 ; i++){
            //Entonces cuando el primer elemento del cuerpo choque con cualquier otro pasará algo...
            this.scene.physics.add.collider(this.body[0], this.body[i], () =>{
                this.collision();
            });
            
        }


        
    }

   /**
    * Con este metodo cuando la serpiente choque con una comida crece
    */
    grow(){
        const obj = this.body[this.body.length-1];
        const newObj = this.scene.physics.add.image(obj.x, obj.y ,'body').setOrigin(0);
        this.body.push(newObj);
        this.scene.physics.add.collider(this.body[0], newObj, () =>{
            this.collision();
        });
    }
     /**
     * Funcion que va a controlar la colision de la serpiente consigo misma
     * Si esto pasase pasariamos a la pantalla de GameOver
     */
    collision(){
      this.scene.scene.start('GameOver');
    }
    /**
     * Funcion para cambiar la direccion de la serpiente
     * @param {*} dir que recoge la direccion actual de la serpiente
     */
    changeMov(dir){
        //Aqui entramos en la condicion
        if(this.oldDir != dir){
            this.dir = dir;
        }
       
    }
    /**
     * Update que será pasado al play para que se ejecute constantemente cuando la serpiente este en juego
     * @param {*} time Recogemos el tiempo en milisegundos para poder controlar que la serpiente no vaya tan rapido como el refresco del update
     */
    update(time){
        /*Ahora vamos a arreglar el fallo de que al estar constantemente refrescandose en el update de play
            Va la serpiente muuy rapido y le vamos a ralentizar la velocidad
        */
        if(time>this.timmer){
            //Con este for hacemos que el resto del cuerpo siga al principal
            for(let i = this.body.length-1; i>0; i--){
                this.body[i].x = this.body[i-1].x;
                this.body[i].y = this.body[i-1].y;

                //Con esto de aqui le ponemos los limites, por lo tanto en este caso si sale por un lado que entre por otro y asi
                //En el primer caso es en el ancho del juego  
                this.body[this.body.length -1 -i].x =  Phaser.Math.Wrap( this.body[this.body.length -1 -i].x,
                    0,
                    this.scene.sys.game.config.width);
                //Ahora lo mismo de alto y el punto de alto será menor porque ahi va a estar nuestro tablero con la puntuacion
                this.body[this.body.length -1 -i].y =  Phaser.Math.Wrap( this.body[this.body.length -1 -i].y,
                //Por eso aqui ponemos 20 y arriba 0 
                    20,
                    this.scene.sys.game.config.height);
               

            }
            //Vamos a crear el movimiento de la serpiente 
            switch(this.dir){
                //En el caso de que sea hacia la derecha... y asi con todas las direcciones
                case 'right':
                    this.body[0].x += 10;
                    //Ahora le damos valor a la variable oldDir aqui para controlar arriba lo de que no vuelva sobre si misma
                    this.oldDir = 'left';
                break;
                case 'left':
                    this.body[0].x -= 10;
                    this.oldDir = 'right';
                break;
                case 'up':
                    this.body[0].y -= 10;
                    this.oldDir = 'down';
                break;
                case 'down':
                    this.body[0].y += 10;
                    this.oldDir = 'up';
                break;
            }
            //Ponemos que vaya mas lento porque si no esto parece una carrera de F1
            this.timmer = time + 150;
        }
        
    }
}
//Creamos el objeto y lo exportamos para poder importarlo fuera y llamarlo correctamente
export default Snake;