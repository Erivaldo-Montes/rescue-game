import { playerShot } from "./playerShot.js";

const TECLA = {
  W: 87,
  D: 68,
  S: 83,
};
const press = [];
const playerMovements = () => {
  $(document).keydown((e) => {
    press[e.which] = true;
  });

  $(document).keyup((e) => {
    press[e.which] = false;
  });

  if (parseInt($("#player").css("top")) <= 0) {
    $("#player").css("top", "+=10px");
  }

  if (parseInt($("#player").css("top")) >= 430) {
    $("#player").css("top", "-=10px");
  }

  if (press[TECLA.W]) {
    $("#player").css("top", "-=10px");
  }
  if (press[TECLA.S]) {
    $("#player").css("top", "+=10px");
  }

  if (press[TECLA.D]) {
    playerShot();
  }
};

export { playerMovements };
