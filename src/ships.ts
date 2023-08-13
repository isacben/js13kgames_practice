import { Sprite, collides } from "kontra";
import * as player from "./player";
import * as bullets from "./bullets";
import { Globals } from "./Globals";
import alien from './img/alien.png';

export let sprites: Sprite[] = [];

export function update() {
  sprites.forEach((ship, i)=> {
    ship.update();
    
    if (ship.y >= 600) {
      destroy(i);
    }

    bullets.sprites.forEach((bullet, j) => {
      if (collides(ship, bullet)) {
        destroy(i);
        bullet.ttl = 0;
      }
    });

    if (collides(ship, player.sprite)) {
      destroy(i);
      player.sprite.color = Globals.colors[Math.floor(Math.random() * 14) + 1];
      Globals.shake = 9;
    }
  });
}

export function spawn() {
  if (Globals.T % 30 === 0) {
  let image = new Image();
  image.src = alien;
  image.width = 32;
  image.height = 32;
  image.onload = function() {
    let ship = Sprite({
      x: Math.floor(Math.random() * 120*4) + 1,
      // x: 64 * 4,
      y: -8*4,
      width: 32,
      height: 32,
      image: image,
      dy: 2 
    });
    sprites.push(ship);
    }
  }
}

function destroy(ship: number) {
  sprites.splice(ship, 1);
}
