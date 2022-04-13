import { collision } from "../js/detectCollision.js";
import { friendDead } from "./friendDead.js";
import { score } from "../js/score.js";
import { sounds } from "../js/sounds.js";

export const collisionFriend = () => {
  // collision with friend with jquery
  const player = $("#player");
  const friend = $("#friend");
  const enemy2 = $("#enemy2");
  const possibleColission = [
    [friend, player],
    [friend, enemy2],
  ];

  for (let index of possibleColission) {
    let isCollision = collision(index[0], index[1]);

    if (isCollision && index[1] === enemy2) {
      friendDead(friend);

      setTimeout(() => {
        $("#box").append("<div id='friend'></div>");
      }, 3000);

      score.increaseLost();
    }

    if (isCollision && index[1] === player) {
      friend.remove();
      sounds.resgateSound();
      setTimeout(() => {
        $("#box").append("<div id='friend'></div>");
      }, 3000);

      score.increaseFriend();
    }
  }
};
