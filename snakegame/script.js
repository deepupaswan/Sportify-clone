// constant / variable in the game
let direction={
    x:0,
    y:0
}
let foodsound=new Audio("");
let gameoversound= new Audio("");
let movesound=new Audio("musics/move.mp3");
let musicsound= new Audio("musics/musicsound.mp3");
let lastpainttime=0;
let speed=5;
const playingboard= document.getElementById('playingboard');
let snakearray=[
    {x: 13,y: 15}
    ]
    let food={x:7,y:9};
    let score=0;

//  All the function used in game
function main(ctime){
    window.requestAnimationFrame(main);
    //console.log(ctime);
    if((ctime-lastpainttime)/100<1/speed){
        return;
    }
    lastpainttime=ctime;
    gameengine();

}
function iscollide(snakearray){
      return false;
}
function gameengine(){
    // updating the snake variable  or aaray
      if(iscollide(snakearray)){
          gameoversound.play();
          musicsound.pause();
          direction={x:0,y:0};
          alert("Game is over- Please press any key to play again.");
          snakearray={x:9,y:15};
          musicsound.play();
          score=0;
        
      }
      // if sanke has eaten the food the we have to append a and regenerate a food
       if((snakearray[0].x==food.x) && (snakearray[0].y==food.y)){
            snakearray.unshift({x: snakearray[0].x+direction.x, y: snakearray[0].y+direction.y})
            let a=3;
            let b=15;
            food({x: Math.round(a+(b-a)*Math.random()),y: Math.round(a+(b-a)*Math.random())})
        }
        // MOVING THE SNAKE
        for (let index = snakearray.length-2; index>=0; index--) {
            snakearray[index+1]={...snakearray[index]};
            
        }
        snakearray[0].x+=direction.x;
        snakearray[0].y+=direction.x;
        

    // display the food or sanke in the web page
    //dispalying the snake
    playingboard.innerHTML=" ";
    snakearray.forEach((e,index)=>{
    snakeelement =document.createElement('div');
    snakeelement.style.gridRowStart=e.y;
    snakeelement.style.gridColumnStart=e.x;
    snakeelement.classList.add('snake');
    if(index==0){
        snakeelement.classList.add('head')
    }
    playingboard.appendChild(snakeelement);
    //displaying the food 
    foodelement =document.createElement('div');
    foodelement.style.gridRowStart=food.y;
    foodelement.style.gridColumnStart=food.x;
    foodelement.classList.add('food');
    playingboard.appendChild(foodelement);
    })




}







// Our main logic here
window.requestAnimationFrame(main);
window.addEventListener('keydown',e=>{
    direction={x:0,y:1};// Game started
    movesound.play();
    switch (e.key) {
        case 'ArrowUp':
            direction.x=0;
            direction.y=-1;
            break;
        case 'ArrowDown':
            direction.x=0;
            direction.y=1;
             break;    
        case 'ArrowLeft':
            direction.x=-1;
            direction.y=0;
             break;    
        case 'ArrowRight':
            direction.x=1;
            direction.y=0;
             break;    
        default:
            break;
    }

})