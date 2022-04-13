import { boss } from "../boss/boss.js";

export const score = {
  // Initialize the score
  init: function () {
    this.bossPoints = 1000;
    this.score = 0;
    this.scoreSave = 0;
    this.isBoss = false;
    this.scoreLost = 0;
    $("#box").append(`<div id="score"></div>`);
  },
  // Increase the score
  increaseEnemy1: function () {
    this.score += 100;
  },

  increaseEnemy2: function () {
    this.score += 50;
  },

  //Increase friend
  increaseFriend: function () {
    this.scoreSave++;
  },

  // Increase lost
  increaseLost: function () {
    this.scoreLost++;
  },

  bossLevel: function bossLevel() {
    this.bossPoints += 1000;
  },
  // Show  the score
  show: function () {
    $("#score").html(
      `<h1> Pontos: ${this.score} perdidos: ${this.scoreLost} salvos: ${this.scoreSave}</h1>`
    );

    if (this.score >= this.bossPoints && this.isBoss === false) {
      boss.init();
      this.isBoss = true;
    }
    if (boss.bossDefeat() && this.isBoss === true) {
      this.isBoss = false;
      this.bossPoints = this.score + 1000;
    }
  },
  //save score
  save: function () {
    return {
      score: this.score,
    };
  },
};
