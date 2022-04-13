import { score } from "../js/score.js";
import { sounds } from "../js/sounds.js";
import { stopGame } from "../main.js";

var lifesScore = 3;
export const lifes = {
  decreaseLife: function () {
    lifesScore--;

    if (lifesScore === 3) {
      $("#lifes").removeClass("life0");
      $("#lifes").add("life3");
    }
    if (lifesScore === 2) {
      $("#lifes").removeClass("life3");
      $("#lifes").addClass("life2");
    }

    if (lifesScore === 1) {
      $("#lifes").removeClass("life2");
      $("#lifes").addClass("life1");
    }

    if (lifesScore === 0) {
      $("#lifes").removeClass("life1");
      $("#lifes").addClass("life0");

      stopGame();

      sounds.gameOverSound();

      $("#box").append("<div id='gameOver' ></div>");
      const scoreFinal = score.save();
      $("#gameOver").html(
        `<h1>Game Over</h1><p>sua potuação foi: ${scoreFinal.score}</p><p>clique para recomeçar</p>`
      );

      $("#gameOver").click(() => {
        location.reload();
      });
      $("#player").remove();
      $("#enemy1").remove();
      $("#enemy2").remove();
      $("#friend").remove();
      $("#boss").remove();
      $("bossshot").remove();
    }
  },
};
