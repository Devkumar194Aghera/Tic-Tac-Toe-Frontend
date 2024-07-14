let state = ["", "", "", "", "", "", "", "", ""];
let winnerPresent = false;
const wincondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let grid = document.getElementsByClassName("container")[0];

let current_Player = "X";
let result = document.getElementsByClassName("result")[0];
let box = document.getElementsByTagName("td");
console.log(box);
for (let i = 0; i < 9; i++) {
  if (!winnerPresent) box[i].addEventListener("click", onclick);
}

function changePlayer() {
  current_Player = current_Player == "X" ? "O" : "X";
}

function checkWin() {
  for (let i = 0; i < 8; i++) {
    let a = wincondition[i][0];
    let b = wincondition[i][1];
    let c = wincondition[i][2];
    if (
      state[a] == current_Player &&
      current_Player == state[b] &&
      state[c] == state[b]
    ) {
      result.innerHTML = current_Player + " Wins";
      winnerPresent = true;
      return;
    }
  }
}

function checkTie() {
  if (!state.includes("") && winnerPresent) result.innerHTML = "Its a draw";
}

function onclick() {
  let td = event.target;
  console.log(td);
  let index = td.getAttribute("index");
  if (state[index] == "") {
    state[index] = current_Player;
    td.innerHTML = current_Player;
    checkTie();
    checkWin();
    changePlayer();
  }
}
