class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",player_img);
    
    player2 = createSprite(800,500);
    player2.addImage("player2", player_img);
    players=[player1,player2];
    player.updateTurn();  
        }

        instro()
        {
            background("indigo ");
        }
    
    play(){
        
                form.hide();

             

                Player.getPlayerInfo();
                 image(back_img, 0, 0, 1000, 800);
                 var x =100;
                 var y=200;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y=500;
                     
                     players[index -1].x = x;
                     players[index - 1].y = y;
                       
                     if(index === player.index){
                         
                        fill("black");
                        textSize(25);
                        text(allPlayers[plr].name ,x-35,y+25);

                         
                     }
                     player.getScore();
                     if(player1score !== undefined && player2score !== undefined)
                    {
                    textSize(35);
                    fill("red");
                    text("PLayer 1 : " + player1score,20,50);
                    text("PLayer 2 : " + player2score,20,100);
                    }
                 
                 }
                
                
                 

                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance -= 10
                    player.update();
                    
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distance += 10
                    player.update();
                }
            
                if (frameCount % 60 === 0) 
                {
                    fruit1 = createSprite(random(100, 1000), 0, 100, 100);
                    fruit1.velocityY = 6;
                    fruit1.addImage("fruit1",fruit1_img);
                    fruitGroup1.add(fruit1) ;        
 

                    fruit3 = createSprite(random(100, 1000), 0, 100, 100);
                    fruit3.velocityY = 6;
                    fruit3.addImage("fruit3",fruit3_img);
                    fruitGroup3.add(fruit3) ;        

                }

                if (frameCount % 120 === 0) 
                {

                    fruit2 = createSprite(random(100, 1000), 0, 100, 100);
                    fruit2.velocityY = 6;
                    fruit2.addImage("fruit2",fruit2_img);
                    fruitGroup2.add(fruit2) ;   
                    
                    
                    fruit4 = createSprite(random(100, 1000), 0, 100, 100);
                    fruit4.velocityY = 6;
                    fruit4.addImage("fruit4",fruit4_img);
                    fruitGroup4.add(fruit4) ;  
                }

                if(frameCount % 180 === 0)
                {
                    fruit5 = createSprite(random(100, 1000), 0, 100, 100);
                    fruit5.velocityY = 6;
                    fruit5.addImage("fruit5",fruit5_img);
                    fruitGroup5.add(fruit5) ;  
                }

                player.getTurn();
                
                  if (player.index !== null) {
  

                     if(fruitGroup1.collide(player1) || fruitGroup1.isTouching(player2))
                     {
                        fruitGroup1.destroyEach();
                        fruitGroup2.destroyEach();
                        fruitGroup3.destroyEach();
                        fruitGroup4.destroyEach();
                        fruitGroup5.destroyEach();
                        player.score += 1;
                        player.update();
                        player.updateTurn();    
                        player.turn = player.turn + 1;   
                        player.updateTurn();    
                     }

                     
                     if(fruitGroup2.collide(player1) || fruitGroup2.isTouching(player2))
                     {
                        fruitGroup1.destroyEach();
                        fruitGroup2.destroyEach();
                        fruitGroup3.destroyEach();
                        fruitGroup4.destroyEach();
                        fruitGroup5.destroyEach();
                        player.score += 2;
                        player.update();
                           
                        player.turn = player.turn + 1;     
                        player.updateTurn();   
                     }


                     
                     if(fruitGroup3.collide(player1) || fruitGroup3.isTouching(player2))
                     {
                        fruitGroup1.destroyEach();
                        fruitGroup2.destroyEach();
                        fruitGroup3.destroyEach();
                        fruitGroup4.destroyEach();
                        fruitGroup5.destroyEach();
                        player.score -= 1;
                        player.update();
                           
                        player.turn = player.turn + 1;   
                        player.updateTurn();    
                     }
                     player.update();
                     if(fruitGroup4.collide(player1) || fruitGroup4.isTouching(player2))
                     {
                        fruitGroup1.destroyEach();
                        fruitGroup2.destroyEach();
                        fruitGroup3.destroyEach();
                        fruitGroup4.destroyEach();
                        fruitGroup5.destroyEach();
                        player.score -= 2;
                        player.update();
                        player.updateTurn();    
                        player.turn = player.turn + 1;     
                        player.updateTurn();   
                     }

                     if(fruitGroup5.collide(player1) || fruitGroup5.isTouching(player2))
                     {
                        fruitGroup1.destroyEach();
                        fruitGroup2.destroyEach();
                        fruitGroup3.destroyEach();
                        fruitGroup4.destroyEach();
                        fruitGroup5.destroyEach();
                        player.update();
                        player.updateTurn();    
                        player.turn = player.turn + 1;     
                        player.updateTurn();   
                     }

             
                    if(turning !== undefined)
                    {
                    textSize(55);
                    fill("cyan");
                    text("Turn " + turning,400,200);
                    }
                     
                     // add the condition to calculate the score. and use update ti update the values in the database.
                  }
                

         
                  if(player1score >= 20 || player2score >= 20)
                  {
                      gameState = 2;
                  }
        
                   
          
                   

    }

    end(){
       console.log("Game Ended");
       textSize(70);
       fill("blue");
       if(player1score >= 5)
       {
          text("Player 1 Won!!",250,300)
       }
     else  if(player2score >= 5)
       {
          text("Player 2 Won!!",250,300)
       }
       else
       {
        text("Opponent Left!!",250,300);
       }
    
    }
}