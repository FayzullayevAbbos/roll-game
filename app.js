// select all
const restart = document.querySelector(".rest");
const roll = document.querySelector(".roll");
const hold = document.querySelector(".hold");
const main = document.querySelector("main");
const achco = document.querySelectorAll(".achco");
const curVal = document.querySelectorAll(".carrVal");
const img = document.createElement("img");
let gameOver = true;
const section = document.querySelectorAll("section");
const modal = document.querySelector(".modal");
const exit = document.querySelector(".x");
const h2 = document.querySelector("#h2");

exit.addEventListener("click", () => {
  modal.style.display = "none";
  rest()
});

// functions
// dice roll
roll.addEventListener("click", () => {
  let a = Math.trunc(Math.random() * 6 + 1);
  for (let r = 0; r < section.length; r++) {
    if (section[r].hasAttribute("class")) {
      img.setAttribute("src", `/imgs/dice${a}.png`);
      main.append(img);
      curVal[r].textContent = Number(curVal[r].textContent) + a;
    }
  }
  if (a == 1) {
    if (section[1].hasAttribute("class")) {
      section[1].removeAttribute("class");
      section[0].setAttribute("class", "section1");
      curVal[1].textContent = 0;
      img.remove();
    } else {
      section[0].removeAttribute("class");
      section[1].setAttribute("class", "section1");
      curVal[0].textContent = 0;
      img.remove();
    }
  }
});
// dice hold
hold.addEventListener("click", () => {
  img.remove();
  for (let i = 0; i < section.length; i++) {
    if (section[i].hasAttribute("class")) {
      section[i].removeAttribute("class");
      achco[i].textContent = +achco[i].textContent + +curVal[i].textContent;
      curVal[i].textContent = 0;
    } else {
      section[i].setAttribute("class", "section1");
    }

    if (achco[i].textContent >= 20) {
      modal.style.display = "flex";
      h2.textContent = `${i + 1} - ishtirokchi yutdi`;
      rest();
    }
  }
});

// restart
function rest() {
  curVal[0].textContent = 0;
  curVal[1].textContent = 0;
  achco[0].textContent = 0;
  achco[1].textContent = 0;
  section[1].removeAttribute("class");
  section[0].setAttribute("class", "section1");
  img.remove();
}
restart.addEventListener("click", () => {
  rest();
});
