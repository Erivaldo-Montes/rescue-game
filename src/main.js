import { setBackgroundMove } from "./js/startGame.js";
import "../styles/styles.css";
import { enemy1Movement } from "./enemy/enemy1Moviment.js";
import { playerMovements } from "./player/movemets.js";
import { enemy2Moviment } from "./enemy/enemy2Moviment.js";
import { collisionPlayer } from "./player/collision.js";
import { collisionFriend } from "./friend/collision.js";
import { friendMovement } from "./friend/movement.js";
import { score } from "./js/score.js";

import "../public/assets/images/energia3.png";
// get elements
const startWindow = document.querySelector("#startWindow");
const musicBackground = document.querySelector("#musicBackground");

// listener
startWindow.addEventListener("click", () => startGame());

musicBackground.addEventListener(
  "ended",
  function () {
    musicBackground.currentTime = 0;
    musicBackground.play();
  },
  false
);

var loopGame;

// functions
export const startGame = () => {
  musicBackground.play();

  $("#startWindow").hide();
  $("#backgroundGame").append("<div id='box'></div>");
  $("#box").append("<div id='player'></div>");
  $("#box").append("<div id='enemy1'></div>");
  $("#box").append("<div id='enemy2'></div>");
  $("#box").append("<div id='friend'></div>");
  $("#box").append("<div id='lifes' class='life3'></div>");

  score.init();
  loopGame = window.setInterval(() => {
    setBackgroundMove();
    enemy1Movement();
    playerMovements();
    enemy2Moviment();
    collisionPlayer();
    collisionFriend();
    friendMovement();
    score.show();
  }, 30);
};

export function stopGame() {
  $("#player").remove();
  $("#enemy1").remove();
  $("#enemy2").remove();
  $("#friend").remove();
  $("#boss").remove();
  $("#bossshot").remove();
  $("#bossLife").remove();
  window.clearInterval(loopGame);
  loopGame = null;
}

export { startWindow };
