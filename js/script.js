"use strict";

const introParagraph = document.getElementById("intro");
const headerEl = document.getElementById("page-header");
const gradientBtn = document.getElementById("header-button");
let filterTag = "toutes les couleurs";

// funtions
function addRandomGradientBg() {
  if (headerEl) {
    const random = Math.floor(gradients.length * Math.random());
    const randomGradient = gradients[random];
    const bgImage = `linear-gradient(to right, ${randomGradient.start}, ${randomGradient.end})`;
    headerEl.style.backgroundImage = bgImage;
  }
}

// app
if (introParagraph) {
  introParagraph.textContent = `Voici une collection de ${gradients.length} dégradés prêts à utiliser dans vos feuilles de styles`;
}

addRandomGradientBg(); // execute la fontion une fois quand le script charge
if (gradientBtn) {
  gradientBtn.addEventListener("click", addRandomGradientBg);
}

console.log("tous les dégradés", gradients);
console.log("tags uniques", uniqueTags);

function insertGradients() {
  const ulEL = document.createElement("ul");
  const gridContainer = document.getElementById("grid-container");
  ulEL.classList.add("row", "list-unstyled");
  const filteredGradients = gradients.filter((el) => {
    if (filterTag === "toutes les couleurs") {
      return true;
    } else {
      return el.tags.includes(filterTag);
    }
  });
  for (let gradient of filteredGradients) {
    //console.log(gradient)
    const li = document.createElement("li");
    li.classList.add("col-sm-6", "col-md-4", "col-lg-3");
    const gradientCode = `background-image: linear-gradient(to right, ${gradient.start}, ${gradient.end})`;
    //console.log(li)
    li.innerHTML = `<div class="card p-3 mb-4 shadow">
    <div class="card-gradient rounded-pill mx-auto mb-4" style="${gradientCode}"></div>
      <h2 class="h5 text-center">${gradient.name}</h2>
      <code>${gradientCode}</code>
    </div>`;
    ulEL.append(li);
    gridContainer.innerHTML = "";
    gridContainer.append(ulEL);
  }
  //console.log(ulEL)
  gridContainer.append(ulEL);
}

insertGradients();

function activateFilterByTag() {
  /* repérer select puis créer une boucle*/
  const selectEl = document.getElementById("filtertags");
  //console.log(selectEl)
  /*trier uniqueTags dans l'ordre alphabéthique*/
  uniqueTags.sort();
  //console.log(uniqueTags)
  for (let tag of uniqueTags) {
    const option = document.createElement("option");
    option.textContent = tag;
    option.value;
    //console.log(option)
    selectEl.append(option);
  }
  selectEl.addEventListener("change", () => {
    //alert(`Vous avez choisi la couleur ${selectEl.value}`);
    //console.dir(selectEL)
    filterTag = selectEl.value;
    //console.log(filterTag)
    insertGradients();
  });
}

activateFilterByTag();
