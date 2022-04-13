var isPlay = false;

const launchMissileSound = document.querySelector("#launchMissileSound");
export const sounds = {
  shotSound: () => {
    const shotSound = document.querySelector("#shotSound");
    shotSound.play();
  },

  friendDeadSound: () => {
    const friendDeadSound = document.querySelector("#friendDeadSound");
    friendDeadSound.play();
  },

  resgateSound: () => {
    const resgateSound = document.querySelector("#resgateSound");
    resgateSound.play();
  },

  explosionSound: () => {
    const explosionSound = document.querySelector("#explosionSound");
    explosionSound.play();
  },

  launchMissileSound: () => {
    launchMissileSound.play();
    launchMissileSound.volume = 0.5;

    if (isPlay) {
      console.log("isPlay");
      launchMissileSound.pause();
      launchMissileSound.currentTime = 0;
      launchMissileSound.play();
    }

    launchMissileSound.addEventListener("play", () => {
      isPlay = true;
    });

    launchMissileSound.addEventListener("ended", () => {
      isPlay = false;
    });
  },

  gameOverSound: () => {
    const gameOverSound = document.querySelector("#gameOverSound");

    const musicBackground = document.querySelector("#musicBackground");

    musicBackground.pause();

    launchMissileSound.pause();

    gameOverSound.addEventListener("ended", () => {
      gameOverSound.currentTime = 0;
      gameOverSound.play();
    });
    gameOverSound.play();
  },
};
