import { Sprite, initKeys, keyPressed, onKey, offKey } from "kontra";
import * as bullets from "./bullets";

import { Globals } from "./Globals";

initKeys();

let shot = false;

// this is the player
export let sprite = Sprite({
  x: 285,
  y: 500,
  color: Globals.colors[13], 
  width: 20,
  height: 20,
  dx: 0,

  render: function() {
    sprite.context.fillStyle= sprite.color;
    sprite.context.beginPath();
    sprite.context.moveTo(15, 0); // 15 to the right (start at top corner)
    sprite.context.lineTo(5, 25); // line to bottom left corner
    sprite.context.lineTo(25, 25); // line to right corner
    sprite.context.closePath();
    sprite.context.fill();
  }

});


export function move() {
  if (keyPressed('arrowleft')) {
    sprite.x -= 5;
  }
  if (keyPressed('arrowright')) {
    sprite.x += 5;
  }

  if (sprite.x <= 0) {
    sprite.x = 0;
  }

  if (sprite.x >= 575) {
      sprite.x = 575;
  }


  onKey('space', function(e) {
    if (!shot) {
      shot = true;
      shoot();
    }
  });
  onKey('space', function(e) {
    shot = false;
  }, {"handler": "keyup"}); 
}

function shoot() {
  let bullet = Sprite({
    x: sprite.x+15,        // starting x,y position of the sprite
    y: sprite.y,
    color: Globals.colors[9],  // fill color of the sprite rectangle
    width: 11,     // width and height of the sprite rectangle
    height: 20,

    // custom properties
    ttl: 100,

    render: function() {
      bullet.context.fillStyle = bullet.color;
      bullet.context.beginPath();
      bullet.context.arc(0, 0, 10, 0, 2 * Math.PI);
      bullet.context.fill();
    }

  });
  
  bullets.sprites.push(bullet);
}

export function control(canvas: HTMLCanvasElement) {
  if (sprite.x > canvas.width) {
    // sprite.x = -sprite.width;
  }
 }
