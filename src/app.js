/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// function to select a random element from the array. Not required for this project
function randomElement(array) {
  let randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

// function to generate domains
function generateDomainsList() {
  // Arrays representing the domain sections and containing possible elements
  let pronoun = ["the", "our", ""];
  let adj = ["great", "big", "master", "little"];
  let noun = ["jogger", "racoon", "samurai", "inspector", "gadjet"];

  // Empty Array
  let domainsArray = [];

  // for loop to get through all possibilities
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let x = 0; x < noun.length; x++) {
        domainsArray.push(pronoun[i] + adj[j] + noun[x]);
      }
    }
  }
  return domainsArray;
}

// function to concatenate domain with any given extension
function domainWithExtension(domain, extension) {
  return domain + extension;
}

// function to render a single domain in a selected box or target
function renderRandomDomain(target) {
  let domain = randomElement(generateDomainsList());
  let extension = document.getElementById("extension").value;
  target.innerHTML = domainWithExtension(domain, extension);
}

// function to render all domains available in a list
function renderAllDomains(target) {
  target.innerHTML = "";
  let domainList = generateDomainsList();
  let extension = document.getElementById("extension").value;
  for (let i = 0; i < domainList.length; i++) {
    let domain = domainList[i];
    let para = document.createElement("p");
    para.classList.add("my-0");
    para.innerHTML = domainWithExtension(domain, extension);
    target.appendChild(para);
  }
}

// Code to render the domains in browser
let yellowBox = document.getElementById("domain");
let greenBox = document.getElementById("domainList");
window.onload = function() {
  renderRandomDomain(yellowBox);
  renderAllDomains(greenBox);
};

document.getElementById("rigo").onclick = function() {
  renderRandomDomain(yellowBox);
};

document.getElementById("extension").onchange = function() {
  renderRandomDomain(yellowBox);
  renderAllDomains(greenBox);
};

console.log(generateDomainsList());
