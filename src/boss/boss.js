import { collision } from "../js/detectCollision";
import { explosion1 } from "../js/explosion1.js";
import { sounds } from "../js/sounds.js";

var direction = "+=2px";
var isShot = true;
var bossLife = 3;
export const boss = {
  init: function () {
    //   $("#enemy1").remove();
    //   $("#enemy2").remove();
    $("#box").append(`<div id="boss"></div>`);
    $("#boss").css("top", Math.random() * 350 + "px");

    $("#box").append(`<div id="bossLife" class="bossLife3"></div>`);

    this.loopBoss = window.setInterval(() => {
      bossMovement();
      bossCollission();
    }, 30);

    // set move boss
    function bossMovement() {
      if (parseInt($("#boss").css("left")) >= 900) {
        $("#boss").css("left", "-=10px");
      }
      if (parseInt($("#boss").css("left")) <= 900) {
        bossShot();
        if (parseInt($("#boss").css("top")) <= 0) {
          direction = "+=4px";
        }
        if (parseInt($("#boss").css("top")) >= 350) {
          direction = "-=4px";
        }
        $(`#boss`).css("top", direction);
      }
    }

    // detect collision boss with player shot
    function bossCollission() {
      var isCollision = collision($("#boss"), $("#shot"));

      if (isCollision) {
        explosion1($("#boss"));
        $("#shot").css("left", 1200);
        bossLife--;

        // boss Life
        if (bossLife === 2) {
          $("#bossLife").removeClass("bossLife3");
          $("#bossLife").addClass("bossLife2");
        }

        if (bossLife === 1) {
          $("#bossLife").removeClass("bossLife2");
          $("#bossLife").addClass("bossLife1");
        }

        if (bossLife === 0) {
          $("#bossLife").remove();
        }
      }
    }

    //   // boss atack
    function bossShot() {
      if (isShot && boss.bossDefeat() == false) {
        isShot = false;
        sounds.launchMissileSound();
        $("#box").append(`<div id="bossshot"></div>`);
        $("#bossshot").css("left", parseInt($("#boss").css("left")));
        $("#bossshot").css("top", parseInt($("#boss").css("top")) + 30);
      }

      $("#bossshot").css("left", "-=10px");
      if (parseInt($("#bossshot").css("left")) <= -100) {
        isShot = true;
        $("#bossshot").remove();
      }
    }
  },

  bossDefeat: function () {
    if (bossLife <= 0) {
      $("#boss").remove();

      $("#bossshot").remove();
      clearInterval(this.loopBoss);
      this.loopBoss = null;
      bossLife = 3;
      isShot = true;

      return true;
    } else {
      return false;
    }
  },
};
