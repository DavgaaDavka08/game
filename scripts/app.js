// let score = JSON.parse(localStorage.getItem("scpre")) || {
// yalalt:0,
// yalagdalt:0,
// tentselt:0,
// }

document.querySelector(".js-daavuu-button").addEventListener("click", () => {
  playGame("daavuu");
});
document.querySelector(".js-chuluu-button").addEventListener("click", () => {
  playGame("chuluu");
});
document.querySelector(".js-haich-button").addEventListener("click", () => {
  playGame("haich");
});
function playComputer() {
  const randomNumber = Math.random();
  let computerMove = "";
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "haich";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "chuluu";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "daavuu";
  }
  return computerMove;
}
function playGame(playUser) {
  let result = "";
  let computer = playComputer();
  if (playUser === "haich") {
    if (computer === "haich") {
      result = "тэнцлээ";
    } else if (computer === "chuluu") {
      result = "ялагдлаа";
    } else if (computer === "daavuu") {
      result = "яллаа";
    }
  }

  if (playUser === "chuluu") {
    if (computer === "haich") {
      result = "яллаа";
    } else if (computer === "chuluu") {
      result = "тэнцлээ";
    } else if (computer === "daavuu") {
      result = "ялагдлаа";
    }
  }

  if (playUser === "daavuu") {
    if (computer === "haich") {
      result = "ялагдлаа";
    } else if (computer === "chuluu") {
      result = "яллаа";
    } else if (computer === "daavuu") {
      result = "тэнцлээ";
    }
  }

  document.querySelector(".result-vr").innerHTML = result;

  document.querySelector(
    ".js-moves"
  ).innerHTML = ` та <img src="images/${playUser}.png" class="move-icon" > 
     <img src="images/${computer}.png" class="move-icon" > computer`;
}
//
