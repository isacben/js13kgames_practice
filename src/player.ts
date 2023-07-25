import { Sprite, initKeys, keyPressed } from "kontra"
import * as bullets from "./bullets";

import { Globals } from "./Globals";

initKeys();

// this is the player
export  let sprite = Sprite({
  x: 80,
  y: 80,
  color: 'blue',
  width: 20,
  height: 20,
  dx: 0 
});

export function move() {
  if (keyPressed('arrowup')) {
    sprite.y -= 5;
  }
  if (keyPressed('arrowdown')) {
    sprite.y += 5;
  }
  if (keyPressed('space')) {
    shoot();
  }
}

function shoot() {
  let bullet = Sprite({
    x: sprite.x + 20,        // starting x,y position of the sprite
    y: sprite.y,
    color: 'blue',  // fill color of the sprite rectangle
    width: 10,     // width and height of the sprite rectangle
    height: 2,
    dx: 0,          // move the sprite 2px to the right every frame

    // custom properties
    ttl: 100
  });
  
  bullets.sprites.push(bullet);
}

export function control(canvas: HTMLCanvasElement) {
  if (sprite.x > canvas.width) {
    sprite.x = -sprite.width;
  }
 }
