function conteudoFuji(sectionId) {
  const section = document.getElementById(sectionId);
  const button = document.getElementById("botao-fuji");
  if (section.style.display === "none" || section.style.display === "") {
    section.style.display = "block";
    button.textContent = "Mostrar Menos";
  } else {
    section.style.display = "none";
    button.textContent = "Mostrar Mais";
  }
}
function conteudoParqueUeno(sectionId) {
  const section = document.getElementById(sectionId);
  const button = document.getElementById("botao-ueno");

  if (section.style.display === "none" || section.style.display === "") {
    section.style.display = "block";
    button.textContent = "Mostrar Menos";
  } else {
    section.style.display = "none";
    button.textContent = "Mostrar Mais";
  }
}

function conteudoCachoeiraKegon(sectionId) {
  const section = document.getElementById(sectionId);
  const button = document.getElementById("botao-kegon");

  if (section.style.display === "none" || section.style.display === "") {
    section.style.display = "block";
    button.textContent = "Mostrar Menos";
  } else {
    section.style.display = "none";
    button.textContent = "Mostrar Mais";
  }
}
