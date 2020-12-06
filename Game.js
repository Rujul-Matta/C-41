class game {
    constructor(){}
    getG(){
        var G_ref = database.ref('GameState')
        G_ref.on('value', function(data){
            GameState = data.val();
        })
    }
    update(G){
        database.ref('/').update({
         GameState : G 
        });
    }
   async start(){
        if(GameState === 0){
            player = new Player();
            
            var num = await database.ref("PlayerCount").once("value")
            if (num.exists()) {
                PlayerCount = num.val();
                player.getCount();
            }
            form = new Form();
            form.display();
        }
        // if(GameState !== 0){
            
            car_1 = createSprite(100,400-50);
            car_1.addImage(Img_1);
            car_1.scale = 0.12;

            car_2 = createSprite(300,400-50);
            car_2.addImage(Img_2);
            car_2.scale = 0.12;

            car_3 = createSprite(500,400-50);
            car_3.addImage(Img_3);
            car_3.scale = 0.15;

            car_4 = createSprite(700,400-50);
            car_4.addImage(Img_4);
            car_4.scale = 0.15;

            carArray = [car_1, car_2, car_3, car_4];
            // console.log(carArray)
        
    }
    play(){
        form.hide();
    //    fill('red');
    //    textSize(50);
    //    stroke('red')
    //    strokeWeight(5)
    //    text('!!! GAME is ON !!!', displayWidth/2 - 250, displayHeight/2 - 200)
        Player.playerInfo()
        player.getRank();
        if (allPlayers !== undefined) {
            background(rgb(198,135,103));
            image(track, 0, -(displayHeight * 3.5), displayWidth,displayHeight*5)
            var index_1 = 0;
            var x = 75;
            var y;
           
            for(var i in allPlayers){
                index_1 += 1;
                x += 250;
                y = displayHeight - allPlayers[i].Distance
                carArray[index_1-1].x = x;
                carArray[index_1-1].y = y;
                
                if(index_1 == player.index){
                    carArray[index_1 - 1].shapeColor = "red"
                    fill('cyan')
                    rect(x - 25, y + 75, 50,5);
                    camera.position.x = displayWidth/2;
                    camera.position.y = y
                    if(keyDown(RIGHT_ARROW) && player.index !== null){
                        carArray[index_1 - 1].x += 25;
                    }
                    if(keyDown(LEFT_ARROW) && player.index !== null){
                        carArray[index_1 - 1].x -= 25;
                    }
                }
            }


        }
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance += 200;
            player.update();
        }
        

        if(player.distance >= 3420){
            GameState = 2; 
            player.rank += 1;
            // for (let i = 0; i < player.rank; i++) {
            //     database.ref('/').update({
            //         'players/player1/rank': player.rank
            //     })
            // }
            Player.RANK(player.rank);
        }
        drawSprites();
    }
    end(){

        car_1.visible = false;
        car_2.visible = false;
        car_3.visible = false;
        car_4.visible = false;

        r_1 = createSprite(camera.position.x - 300,camera.position.y - 275)
        r_1.addImage(r1);
        r_1.scale = 0.15;

        r_2 = createSprite(camera.position.x - 300,camera.position.y - 100)
        r_2.addImage(r2);
        r_2.scale = 0.1;

        r_3 = createSprite(camera.position.x - 300,camera.position.y + 50)
        r_3.addImage(r3);
        r_3.scale = 0.1;

        r_4 = createSprite(camera.position.x - 300,camera.position.y + 250)
        r_4.addImage(r4);
        r_4.scale = 0.1;

        d1 = database.ref('players/player1/Distance');
        d1.on("value",function(data){
            d1 = data.val();
        })
        d2 = database.ref('players/player2/Distance');
        d2.on("value",function(data){
            d2 = data.val();
        })
        d3 = database.ref('players/player3/Distance');
        d3.on("value",function(data){
            d3 = data.val();
        })
        d4 = database.ref('players/player4/Distance');
        d4.on("value",function(data){
            d4 = data.val();
        })
        z1 = 'player1';
        z2 = 'player2';
        z3 = 'player3';
        z4 = 'player4';

        if(d1 >= 3420){
        n = database.ref('players/'+ z1 +'/Name');
        n.on("value",function(data){
            n = data.val();
        })}
        if(d2 >= 3420){
            n = database.ref('players/'+ z2 +'/Name');
            n.on("value",function(data){
                n = data.val();
            })}
        if(d3 >= 3420){
            n = database.ref('players/'+ z3 +'/Name');
            n.on("value",function(data){
                n = data.val();
            })}
        if(d4 >= 3420){
            n = database.ref('players/'+ z4 +'/Name');
            n.on("value",function(data){
                n = data.val();
            })}

        // n2 = database.ref('players/player2/Name');
        // n2.on("value",function(data){
        //     n2 = data.val();
        // })
        // n3 = database.ref('players/player3/Name');
        // n3.on("value",function(data){
        //     n3 = data.val();
        // })
        // n4 = database.ref('players/player4/Name');
        // n4.on("value",function(data){
        //     n4 = data.val();
        // })

        database.ref('/').update({Rank_1: n})
        database.ref('/').update({Rank_2: n})
        database.ref('/').update({Rank_3: n})
        database.ref('/').update({Rank_4: n})


        drawSprites();

        fill(0);
        stroke(0);
        strokeWeight(3);
        // textSize(45);
        text("1st = "+ n, camera.position.x - 100,camera.position.y - 275);
        text("2nd = "+ n, camera.position.x - 100,camera.position.y - 100);
        text("3rd = "+ n, camera.position.x - 100,camera.position.y + 50);
        text("4th = "+ n, camera.position.x - 100,camera.position.y + 250);
        
    }
}