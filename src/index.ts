import { init, Sprite, GameLoop } from "kontra";
import * as player from "./player";
import * as bullets from "./bullets"; 

import { Globals } from "./Globals";

let { canvas } = init();

let T = 0;

let loop = GameLoop({ 
  update: function() { 
    T += 1;
    player.move();
    player.sprite.update();
    player.control(canvas);
    bullets.update();
  },
  render: function() {
    player.sprite.render();
    bullets.sprites.forEach((bullet)=> {
      bullet.render();
    });
  }
});

loop.start();
