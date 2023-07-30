import { Sprite, collides } from "kontra";
import * as player from "./player";
import * as bullets from "./bullets";

import { Globals } from "./Globals";

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
        bullet.ttl = 0 
      }
    });

    if (collides(ship, player.sprite)) {
      destroy(i);
      player.sprite.color = Globals.colors[Math.floor(Math.random() * 14) + 1];
    }
 
  });
}

export function spawn() {
  if (Globals.T % 30 === 0) {
    let ship = Sprite({
    x: Math.floor(Math.random() * 569) + 1,        // starting x,y position of the sprite
    y: -40,
    color: Globals.colors[3],  // fill color of the sprite rectangle
    width: 30,     // width and height of the sprite rectangle
    height: 30,
    dy: 3
  });
  
  sprites.push(ship);
  }
}

function destroy(ship: number) {
  sprites.splice(ship, 1);
}
