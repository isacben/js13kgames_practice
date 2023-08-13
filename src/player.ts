import { Sprite, initKeys, keyPressed, onKey, offKey } from "kontra";
import * as bullets from "./bullets";
import { Globals } from "./Globals";

initKeys();

let shot = false;

// this is the player
export let sprite = Sprite({
  x: 64 * 4,
  y: 112 * 4,
  color: Globals.colors[13], 
  width: 32,
  height: 32,
  dx: 0,

  render: function() {
    sprite.context.fillStyle= sprite.color;
    sprite.context.beginPath();
    sprite.context.moveTo(16, 0); // 15 to the right (start at top corner)
    sprite.context.lineTo(0, 32); // line to bottom left corner
    sprite.context.lineTo(32, 32); // line to right corner
    sprite.context.closePath();
    sprite.context.fill();
  }

});


export function move() {
  if (keyPressed('arrowleft')) {
    sprite.x -= 3;
  }
  if (keyPressed('arrowright')) {
    sprite.x += 3;
  }

  if (sprite.x <= 0) {
    sprite.x = 0;
  }

  if (sprite.x >= 120*4) {
      sprite.x = 120*4;
  }

  onKey('space', function(e) {
    if (!shot) {
      shot = true;
      bullets.shoot(sprite.x, sprite.y);
    }
  });
  onKey('space', function(e) {
    shot = false;
  }, {"handler": "keyup"}); 
}

export function control(canvas: HTMLCanvasElement) {
  // if (sprite.x > canvas.width) {
    // sprite.x = -sprite.width;
  // }
}
