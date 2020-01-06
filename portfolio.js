// for background animation

// Some random colors
const colors = ["#c0c0c0", , "#FFFFFF"];

const numBalls = 140;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");

  ball.style.background = colors[Math.floor(Math.random() * colors.length)];

  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;

  ball.style.width = `${Math.random() * 0.5}em`;
  ball.style.height = ball.style.width;

  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  balls.push(ball);
  document.getElementById("welcome-section").append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * 0,
    y: Math.random() * 50
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}vh, ${to.y}vh)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});
//--------------------
//code for flip card
//---------------------
var card = document.getElementById("card");
var opposite = document.getElementById("text");
var oppositecard = document.getElementById("flipy");

document.getElementById("flip").addEventListener(
  "click",
  function() {
    opposite.style.display = "none";
    oppositecard.style.display = "block";

    card.classList.toggle("flipped");
  },
  false
);

document.getElementById("flipback").addEventListener(
  "click",
  function() {
    oppositecard.style.display = "none";
    opposite.style.display = "block";

    card.classList.toggle("flipped");
  },
  false
);
