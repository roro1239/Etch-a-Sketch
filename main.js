let container = document.getElementById("container");
let btnReset = document.querySelector(".btnReset");
let btnBlack = document.querySelector(".btnBlack");
let btnRainbow = document.querySelector(".btnRainbow");
let btnGrid = document.querySelector(".btnGrid");
let width = container.clientWidth;
let height = container.clientHeight;
let box = prompt("How big do you want to grid to be?");
let number = parseInt(box);

function boxes() {
     if (number > 1 && number < 101) {
          createGrid(number);
     } else {
          alert("Needs to be a number between 2 to 100");
          setTimeout(() => window.location.reload(), 2000);
     }
}