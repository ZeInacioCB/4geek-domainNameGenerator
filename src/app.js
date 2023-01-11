/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function randomElement(array) {
  let randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function generateDomainName() {
  let pronoun = ["the", "our", ""];
  let adj = ["great", "big", "master", "little"];
  let noun = ["jogger", "racoon", "samurai", "harry", "inspector", "gadjet"];

  let domainName =
    randomElement(pronoun) + randomElement(adj) + randomElement(noun);

  return domainName;
}

function domainWithExtension(domain, extension) {
  return domain + extension;
}

window.onload = function() {
  //write your code here
  let domain = generateDomainName();
  let extension = document.getElementById("extension").value;
  let htmlElement = document.getElementById("domain");
  htmlElement.innerHTML = domainWithExtension(domain, extension);
};

document.getElementById("domain").onclick = function() {
  let domain = generateDomainName();
  let extension = document.getElementById("extension").value;
  let htmlElement = document.getElementById("domain");
  htmlElement.innerHTML = domainWithExtension(domain, extension);
};

document.getElementById("extension").onchange = function() {
  let domain = generateDomainName();
  let extension = document.getElementById("extension").value;
  let htmlElement = document.getElementById("domain");
  htmlElement.innerHTML = domainWithExtension(domain, extension);
};
