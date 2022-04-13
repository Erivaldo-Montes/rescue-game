let positionY = Math.random() * 350;
import { lifes } from "../player/lifes.js";
export const enemy1Movement = () => {
  const positionX = parseInt($("#enemy1").css("left"));
  $("#enemy1").css("left", positionX - 10);
  $("#enemy1").css("top", positionY);

  if (positionX <= -256) {
    positionY = Math.random() * 350;
    $("#enemy1").css("left", "1224px");
    $("#enemy1").css("top", positionY);
  }
};
