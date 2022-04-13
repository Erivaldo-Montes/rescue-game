import { sounds } from "../js/sounds.js";

export const friendDead = (element) => {
  $("#box").append("<div class='friendDead'></div>");
  sounds.friendDeadSound();
  $(".friendDead").css("left", parseInt(element.css("left")));
  $(".friendDead").css("top", parseInt(element.css("top")));
  element.remove();
  setTimeout(() => {
    $(".friendDead").remove();
  }, 1000);
};
