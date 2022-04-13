import { collision } from "../js/detectCollision.js";
import { explosion1 } from "../js/explosion1.js";
import { lifes } from "./lifes.js";
import { score } from "../js/score.js";

export const collisionPlayer = () => {
  // Collision player with enemy1 with jquery
  const player = $("#player");
  const enemy1 = $("#enemy1");
  const shot = $("#shot");
  const enemy2 = $("#enemy2");
  const bossshot = $("#bossshot");

  const possibleColission = [
    [player, enemy1],
    [player, enemy2],
    [player, bossshot],
    [shot, enemy1],
    [shot, enemy2],
  ];

  for (let index of possibleColission) {
    let isCollsion = collision(index[0], index[1]);

    if (index[0] === player && isCollsion) {
      explosion1(index[1]);
      lifes.decreaseLife();

      index[1].css("left", -260);
    }

    if (index[0] === shot && isCollsion) {
      if (index[1] === enemy1) {
        score.increaseEnemy1();
      }
      if (index[1] === enemy2) {
        score.increaseEnemy2();
      }

      explosion1(index[1]);

      index[0].css("left", 1200);
      index[1].css("left", -260);
    }

    if (index[1] === bossshot && isCollsion) {
      explosion1(index[0]);

      index[1].css("left", -260);
    }
  }
};
