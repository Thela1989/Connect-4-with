var playerRed = "R";
var playerYellow = "Y";
var currPlayer = "playerRed";

var gameOver = false;
var board;

var rows = 6;
var columns = 7;

window.onload = function () {
  setGame();
};

function setGame() {
  board = [];

  for (let r = 0; r < rows; r++) {
    let row = [];
    for (let c = 0; c < columns; c++) {
      row.push(" ");
      let title = document.createElement();
    }
  }
}
