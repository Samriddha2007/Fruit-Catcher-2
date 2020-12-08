class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
       this.instro = createButton('Read Manual');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
        this.instro.hide();
    }
    display() {
        this.title.html("FRUIT CATCHER");
        this.title.position(350, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');
        this.input.position(550,400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.button.position(560,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');
        this.reset.position(900, 660);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'lightpink');


        this.instro.position(560, 580);
        this.instro.style('width', '200px');
        this.instro.style('height', '40px');
        this.instro.style('background', 'lightblue');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(400,250);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '100px');
            this.instro.hide();
        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);
        });

        this.instro.mousePressed(() => {
            gameState = 3;

            this.title01 = createElement('h2');
            this.title01.html("Score 20 to Win!");
            this.title01.position(350, 50);
            this.title01.style('font-size', '70px');
            this.title01.style('color', 'rgb(235, 76, 52)');

            this.title02 = createElement('h4');
            this.title02.html("Catch Apple For 1 point");
            this.title02.position(350, 140);
            this.title02.style('font-size', '50px');
            this.title02.style('color', 'rgb(3, 252, 102)');

            this.title03 = createElement('h4');
            this.title03.html("Catch Pine-Apple For 2 point");
            this.title03.position(300, 240);
            this.title03.style('font-size', '50px');
            this.title03.style('color', 'rgb(3, 252, 102)');

            this.title04 = createElement('h4');
            this.title04.html("Catching Melon will reduce 1 point");
            this.title04.position(300, 340);
            this.title04.style('font-size', '50px');
            this.title04.style('color', 'rgb(3, 252, 102)');

            this.title05 = createElement('h4');
            this.title05.html("Catching Orange will reduce 2 point");
            this.title05.position(300, 440);
            this.title05.style('font-size', '50px');
            this.title05.style('color', 'rgb(3, 252, 102)');

            this.title06 = createElement('h4');
            this.title06.html("No point for catching Banana");
            this.title06.position(300, 540);
            this.title06.style('font-size', '50px');
            this.title06.style('color', 'rgb(3, 252, 102)');


            this.back = createButton('Go Back');
            this.back.position(1000, 670);
            this.back.style('width', '100px');
            this.back.style('height', '30px');

            this.reset.style('background', 'lightpink');
            this.input.hide();
            this.button.hide();
            this.title.hide();
            this.reset.hide();
            this.instro.hide();
            this.back.show();



            this.back.mousePressed(() => {
                gameState = 0;
                this.input.show();
                this.button.show();
                this.title.show();
                this.instro.show();
                this.reset.show();
                this.back.hide();
                this.title01.hide();
                this.title02.hide();
                this.title03.hide();
                this.title04.hide();
                this.title05.hide();
                this.title06.hide();
            });
        });


    }
}
