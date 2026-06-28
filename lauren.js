// =============================================
// YOUR TOOL — rename it to yourname.js
// =============================================
// `plot` is the garden plot that your tool was dropped onto.
// Write your code inside the apply function below.

const flowers = ["🌻", "🌼", "🌷", "🌹"];

function apply(flower) {
  const random = Math.floor(Math.random() * flowers.length);
  console.log(random, flowers[random]);
  flower.innerHTML = `${flowers[random]}`;
}

const plot = document.getElementById("plot-5");

// attach listeners to every flower inside the plot
const allFlowers = plot.querySelectorAll(".flower-example");

allFlowers.forEach((flower) => {
  flower.addEventListener("dragover", (e) => e.preventDefault());
  flower.addEventListener("drop", (e) => {
    e.preventDefault();
    apply(flower); // pass the specific flower that was dropped on
  });
});

// =============================================
// Fill in your details below — don't change the structure
// =============================================

export default {
  name: "CROSS-POLLINATE", // <- REPLACE; must be unique — this identifies your tool
  icon: "🐝", // <- REPLACE; change to an emoji
  apply,
};
