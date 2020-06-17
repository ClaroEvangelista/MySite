var randonNumber1, randonNumber2;
randonNumber1 = Math.floor((Math.random() * 6) + 1);
document.querySelectorAll("img")[0].setAttribute("src", "images/diceeImages/dice" + randonNumber1 + ".png");
randonNumber2 = Math.floor((Math.random() * 6) + 1);
document.querySelectorAll("img")[1].setAttribute("src", "images/diceeImages/dice" + randonNumber2 + ".png");
if (randonNumber1 > randonNumber2) {
  document.querySelector("h1").innerText = "✨Player 1 wins!";
} else if (randonNumber2 > randonNumber1){
  document.querySelector("h1").innerText = "Player 2 wins!✨";
} else {
  document.querySelector("h1").innerText = "✨It's a tie!✨";
}
