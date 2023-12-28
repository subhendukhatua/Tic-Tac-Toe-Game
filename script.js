let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector(".reset-game");
let newGameBtn= document.querySelector(".new-game");
let winnerMsg = document.querySelector(".winner-msg");
let msg = document.querySelector(".msg");

let playerX = true;
const winPtrns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
    playerX = true;
    enableBoxes();
    winnerMsg.classList.add("hide");

}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (playerX) {
      box.innerText = "X";
      playerX = false;
    } else {
      box.innerText = "O";
      playerX = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const disableBoxes = () =>{
    for(box of boxes){
        box.disabled=true;
    }
}

const enableBoxes = () =>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner= (winner) =>{
    msg.innerText=`Congrats, winner is ${winner}`;
    winnerMsg.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
  for (let pattern of winPtrns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val == pos2Val && pos2Val == pos3Val) {
        console.log("Winner", pos1Val);
        showWinner(pos1Val);
      }
    }
  }
};

resetButton.addEventListener("click",resetGame);
newGameBtn.addEventListener("click", resetGame);
