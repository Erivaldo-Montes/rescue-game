import { lifes } from "../player/lifes.js";

export const enemy2Moviment = () => {
  const enemyPositionX = parseInt($("#enemy2").css("left"));
  $("#enemy2").css("left", enemyPositionX - 5);

  if (enemyPositionX <= -256) {
    window.setTimeout(() => {
      $("#enemy2").css("left", "1200px");
    }, 3000);
  }
};
