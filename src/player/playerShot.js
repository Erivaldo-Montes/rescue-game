import { collisionPlayer } from "./collision.js";
import { sounds } from "../js/sounds.js";

let isShot = true;
let timeShot;

export const playerShot = () => {
  if (isShot) {
    isShot = false;

    const positionPlayerX =
      parseInt($("#player").css("left")) + parseInt($("#player").css("width"));

    const positionPlayerY =
      parseInt($("#player").css("top")) + parseInt($("#player").css("height"));

    $("#box").append("<div id='shot'></div>");
    $("#shot").css("top", positionPlayerY - 30);
    $("#shot").css("left", positionPlayerX - 50);

    sounds.shotSound();

    timeShot = window.setInterval(shotExecute, 30);

    function shotExecute() {
      const positionShotX = parseInt($("#shot").css("left"));
      $("#shot").css("left", positionShotX + 15);
      collisionPlayer();
      if (positionShotX >= 1200) {
        $("#shot").remove();
        window.clearInterval(timeShot);
        timeShot = null;
        isShot = true;
      }
    }
  }
};
