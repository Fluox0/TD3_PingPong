game.control = {
   
  mousePointer : null,
  controlSystem : "KEYBOARD",

  onKeyDown : function(event) {
      if ( event.keyCode == game.keycode.KEYDOWN ) { 
        game.playerOne.goDown = true;
      } else if ( event.keyCode == game.keycode.KEYUP ) { 
        game.playerOne.goUp = true;
      }
     
     if ( !game.ball.inGame) { 
          game.ball.inGame = true;
          game.ball.posX = game.playerOne.posX + game.playerOne.width;
          game.ball.posY = game.playerOne.posY;
          game.ball.directionX = 1;
          game.ball.directionY = 1;
        }
      },
 
  onKeyUp : function(event) {
    if ( event.keyCode == game.keycode.KEYDOWN ) {
      game.playerOne.goDown = false;
    } else if ( event.keyCode == game.keycode.KEYUP ) {
      game.playerOne.goUp = false;
    }
  },

  /*onMouseMove : function(event) {
  
      game.control.controlSystem = "KEYBOARD";
   
      if ( event ) {
        game.control.mousePointer = event.clientY;
      }
    
      if ( game.control.mousePointer > game.playerOne.posY ) {
        game.playerOne.goDown = true;
        game.playerOne.goUp = false;
      } else if ( game.control.mousePointer < game.playerOne.posY ) {
        game.playerOne.goDown = false;
        game.playerOne.goUp = true;
      } else {
        game.playerOne.goDown = false;
        game.playerOne.goUp = false;
      }
    },*/

    onStartGameClickButton : function() {
      if ( !game.gameOn ) {
        game.reinitGame();
        game.gameOn = true;
      }
      
    }
}