function mostrarMensagem() {
  const mensagem = document.getElementById("mensagem");
  if (mensagem.style.display === "block") {
    mensagem.style.display = "none";
  } else {
    mensagem.textContent = "Sou acadêmico do curso de Análise e Desenvolvimento de Sistemas na Faculdade Uninter.";
    mensagem.style.display = "block";
  }
}
