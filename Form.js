class Form{
    constructor(){
        this.input = createInput("Enter Your Name:")
        this.button = createButton('PLAY');
        this.greet = createElement('h1');
        this.title = createElement('h1');
        this.reset = createButton("RESET")
    }
    hide(){
        this.greet.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display(){

        
        this.title.html("Car Racing 3.0");
        this.title.position(displayWidth/2 - 50, 25);

        this.input.position((displayWidth/2-100) - 50 , displayHeight/2 - 75);
        this.button.position((displayWidth/2-100) + 250, displayHeight/2 - 75 );
        this.reset.position(15,15)

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();

            PlayerCount += 1;
            player.index = PlayerCount;
            player.update();
            player.updateCount(PlayerCount);

            this.greet.html('!!!! HELLO ' + player.name + " !!!!!");
            this.greet.position(displayWidth/2 - 20, displayHeight/2 - 25)
        });
        this.reset.mousePressed(()=>{
            database.ref('/').update({
                PlayerCount: 0,
                GameState: 0,
                End:0
            })
        })
    }
}