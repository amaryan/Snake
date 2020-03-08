class Menu extends Phaser.Scene {
    constructor(){
        super('Menu');
    }
    preload(){
        console.log('Soy Menu');
    }
    create(){
        this.add.image(this.sys.game.config.width/2,this.sys.game.config.height/2 -50, 'food').setScale(6);
        this.add.dynamicBitmapText(this.sys.game.config.width/2,this.sys.game.config.height/2,'pixel','SNAKE',18).setOrigin(0.5);
        const pressBttn = this.add.dynamicBitmapText(this.sys.game.config.width/2,this.sys.game.config.height-40,'pixel','PRESS ANY BUTTON',8).setOrigin(0.5);
        this.tweens.add({
            targets: pressBttn,
            alpha: 0,
            ease: (x) => x < 0.5 ? 0 : 1,
            duration: 500,
            yoyo: true,
            repeat: -1
        });
        this.input.keyboard.on('keydown_RIGHT',() =>{
            this.scene.start('Play');
         });
         this.input.keyboard.on('keydown_LEFT',() =>{
            this.scene.start('Play');
         });
         this.input.keyboard.on('keydown_UP',() =>{
            this.scene.start('Play');
         });
         this.input.keyboard.on('keydown_DOWN',() =>{
            this.scene.start('Play');
         });
         this.input.keyboard.on('keydown_ENTER',()=>{
            this.scene.start('Play');
        });
        this.input.on('pointerdown',()=>{
            this.scene.start('Play');
        });
    }
}
export default Menu;