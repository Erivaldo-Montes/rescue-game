import { sounds } from "./sounds.js";

export const explosion1 = (element) => {
  $("#box").append("<div class='explosion'></div>");
  $(".explosion").css("left", parseInt(element.css("left")));
  $(".explosion").css("top", parseInt(element.css("top")));

  sounds.explosionSound();

  setTimeout(() => {
    $(".explosion").remove();
  }, 400);
};
