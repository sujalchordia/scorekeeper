let player1 = document.querySelector("#player1");
let player2 = document.querySelector("#player2");
let header = document.querySelector("#header");
let UserOption = document.querySelector("#players");
let count_player1 = 0;
let count_player2 = 0;
let UserOption_value = UserOption.value;
let result = document.querySelector("#result");
let refresh = document.querySelector("#refresh");

UserOption.addEventListener("change", () => {
  UserOption_value = UserOption.value;
});
header.textContent = count_player1 + "  " + count_player2;
player1.addEventListener("click", () => {
  count_player1++;
  header.textContent = count_player1 + "  " + count_player2;
  if (count_player1 == UserOption_value) {
    result.textContent = "player 1 won";
    reset();
  }
});
player2.addEventListener("click", () => {
  count_player2++;
  header.textContent = count_player1 + "  " + count_player2;
  if (count_player2 == UserOption_value) {
    result.textContent = "player 2 won";
    reset();
  }
});
refresh.addEventListener("click", () => {
  window.location.reload();
});
function reset() {
  count_player1 = 0;
  count_player2 = 0;
  setTimeout(() => {
    header.textContent = count_player1 + "  " + count_player2;
    result.textContent = "";
  },2500);
}
