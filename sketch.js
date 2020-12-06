var PlayerCount ;
var GameState = 0;
var form;
var player;
var database;
var abc;
var allPlayers;
var distance = 0;


var car_1, car_2, car_3, car_4;
var carArray; 

var Img_1, Img_2, Img_3, Img_4;
var track ;

var r1, r2,r3,r4;
var r_1,r_2,r_3,r_4;
var d1, d2, d3, d4;
var n1, n2, n3, n4, n;
var z1, z2, z3, z4;

function preload(){
    track = loadImage('track.png')

    Img_1 = loadImage('Car_1.png');
    Img_2 = loadImage('Car_2.png');
    Img_3 = loadImage('Car_3.png');
    Img_4 = loadImage('Car_4.png');

    r1 = loadImage('1st.jpg')
    r2 = loadImage('2nd.jpg')
    r3 = loadImage('3rd.png')
    r4 = loadImage('4th.png')
}
function setup(){
    createCanvas(displayWidth - 25, displayHeight - 75);
    database = firebase.database();
    abc = new game();
    abc.getG();
    abc.start();
    
    console.log("Game is OVER !!");
    console.log("Rank = " + player.rank);
}

function draw(){
    background(225);
    if(PlayerCount == 4){
        abc.update(1);
    }
    if(GameState === 1){
        clear();
        abc.play();
    }

    if(GameState === 2 ){
        abc.end();
    }
    // drawSprites();
}