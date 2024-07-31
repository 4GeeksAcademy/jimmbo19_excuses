/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function(input) {
  let who = ["el perro", "Mi abuela", "el cartero", " el pajaro"];
  let action = ["comio", "rompio", "robo", "vendio"];
  let what = ["mi tarea", "mi telefono", " el carro"];
  let when = [
    "antes de clases",
    " mientras dormia",
    "mientras me bañaba",
    "en mi descanso",
    "despues del trabajo"
  ];

  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];

  let excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;

  document.querySelector("#excusa").innerHTML = excuse;
};
