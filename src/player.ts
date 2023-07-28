import { Sprite, initKeys, keyPressed, onKey, offKey } from "kontra";
import * as bullets from "./bullets";

import { Globals } from "./Globals";

initKeys();

let shot = false;

// this is the player
export let sprite = Sprite({
  x: 285,
  y: 500,
  color: 'white',
  // width: 32,
  // height: 32,
  dx: 0,

  render: function() {
    sprite.context.strokeStyle = 'white';
    sprite.context.beginPath();
    sprite.context.moveTo(15, 0); // 15 to the left (start at top corner)
    sprite.context.lineTo(5, 25); // line to bottom left corner
    sprite.context.lineTo(25, 25); // line to right corner
    sprite.context.closePath();
    sprite.context.stroke();
  }

});


export function move() {
  if (keyPressed('arrowleft')) {
    sprite.x -= 5;
  }
  if (keyPressed('arrowright')) {
    sprite.x += 5;
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
    x: sprite.x + 16,        // starting x,y position of the sprite
    y: sprite.y,
    color: 'blue',  // fill color of the sprite rectangle
    width: 10,     // width and height of the sprite rectangle
    height: 2,
    dx: 0,          // move the sprite 2px to the right every frame

    // custom properties
    ttl: 100,

    render: function() {
      sprite.context.fillStyle = "white";
      sprite.context.beginPath();
      sprite.context.arc(0, 0, 10, 0, 2 * Math.PI);
      sprite.context.fill();
    }

  });
  
  bullets.sprites.push(bullet);
}

export function control(canvas: HTMLCanvasElement) {
  if (sprite.x > canvas.width) {
    sprite.x = -sprite.width;
  }
 }
