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
function createGrid(gridSize) {
     for (let i = 0; i < gridSize; i++) {
          for (let j = 0; j < gridSize; j++) {
               let div = document.createElement("div");
               div.classList.add("grid");
               container.appendChild(div);
               div.style.width = (width / gridSize) + "px";
               div.style.height = (height / gridSize) + "px";
          }
     }
}

btnGrid.addEventListener("click", () => {
     window.location.reload();
})
btnReset.addEventListener("click", () => {
     container.textContent = "";
     createGrid(number);
});
btnBlack.addEventListener("click", (e) => {
     container.addEventListener("mouseover", (e) => {
          e.target.style.backgroundColor = "black";

     });
}); 

btnRainbow.addEventListener("click", () => {
     container.addEventListener("mouseover", (e) => {
          var colors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
               '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
               '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
               '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
               '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
               '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
               '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
               '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
               '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
               '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
          var randomColor = colors[Math.floor(Math.random() * colors.length)];
          e.target.style.backgroundColor = randomColor;

     });

});