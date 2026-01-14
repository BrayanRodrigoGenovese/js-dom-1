let lamp = document.getElementById("lamp");
const button = document.getElementById("switch");
let isBulbOn = false;

button.addEventListener("click", function () {
  if (!isBulbOn) {
    isBulbOn = true;
    lamp.src = "img/yellow_lamp.png";
    button.innerText = "spegni";
  } else {
    isBulbOn = false;
    lamp.src = "img/white_lamp.png";
    button.innerText = "accendi";
  }
});
