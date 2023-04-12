const dice1 = document.querySelector(".img1");
const dice2 = document.querySelector(".img2");
const h1 = document.querySelector("h1");

let player1 = 6;
let player2 = 6;

const getRandomNumberOneToSix = () => {
  return Math.floor(Math.random() * 6 + 1);
};

const pageAccessedByReload =
  (window.performance.navigation && window.performance.navigation.type === 1) ||
  window.performance
    .getEntriesByType("navigation")
    .map((nav) => nav.type)
    .includes("reload");

if (pageAccessedByReload) {
  player1 = getRandomNumberOneToSix();
  player2 = getRandomNumberOneToSix();
  dice1.src = `images/dice${player1}.png`;
  dice2.src = `images/dice${player2}.png`;
  if (player1 > player2) {
    h1.innerText = "Player 1 Wins! 🚩";
  } else if (player1 < player2) {
    h1.innerText = "Player 2 Wins! 🚩";
  } else {
    h1.innerText = "Draw!";
  }
}
