document
  .getElementById("feedback-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio do formulário

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Verifica se os campos estão preenchidos
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      alert("Por favor, preencha todos os campos!");
      return; // Se faltar algum campo, a execução é interrompida
    }

    // Se tudo estiver preenchido, agradece ao usuário
    alert("Obrigado pelo seu feedback!");

    // Aqui você pode adicionar ações adicionais, como limpar o formulário:
    document.getElementById("feedback-form").reset();
  });
