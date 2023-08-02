import { init, Sprite, Text, GameLoop } from "kontra";
import * as player from "./player";
import * as bullets from "./bullets"; 
import * as ships from "./ships";

import { Globals } from "./Globals";

let { canvas } = init();

let message: string = "debug...";
let debug = Text({
  text: message,
  font: '12px Arial',
  color: Globals.colors[7],
  x: 2 * 4,
  y: 123 * 4,
  textAlign: 'left'
});

let loop = GameLoop({ 
  update: function() { 
    Globals.T += 1;
    player.move();
    player.sprite.update();
    player.control(canvas);
    bullets.update();

    ships.spawn();
    ships.update();
    message = 'Ships: ' + ships.sprites.length; 
    message += ' Bullets: ' + bullets.sprites.length; 
    debug.text = message;
  },
  render: function() {
    player.sprite.render();
    
    bullets.sprites.forEach(bullet => {
      bullet.render();
    });

    ships.sprites.forEach(ship => {
      ship.render();
    });

    debug.render();
  }
});

loop.start();
