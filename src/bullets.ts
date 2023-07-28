import { Sprite } from "kontra";

import { Globals } from "./Globals";

export let sprites: Sprite[] = [];

export function update() {
  sprites.forEach((bullet, i)=> {
    bullet.ttl -= 2;
    bullet.dy = -10;
    bullet.update();
    
    if (bullet.ttl <= 0) {
      destroy(i);
    }
  });
}

function destroy(bullet: number) {
  sprites.splice(bullet, 1);
}
