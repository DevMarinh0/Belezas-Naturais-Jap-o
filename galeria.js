const imagens = document.querySelectorAll(".imagem-galeria");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("imagemModal");
const descricao = document.getElementById("descricao");
const fechar = document.querySelector(".fechar");

imagens.forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    descricao.innerText = img.alt;
  });
});

fechar.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
