// ==========================
// Arquivo base script.js
// ==========================

// Espera o carregamento do DOM antes de executar
document.addEventListener("DOMContentLoaded", () => {
  console.log("Página carregada com sucesso!");

  // Exemplo: Selecionar elementos
  const button = document.querySelector("button");

  // Verifica se existe um botão e adiciona evento
  if (button) {
    button.addEventListener("click", () => {
      alert("Você clicou no botão!");
    });
  }
});

// ==========================
// Funções utilitárias
// ==========================

/**
 * Mostra uma mensagem no console
 * @param {string} mensagem - Texto a ser exibido
 */
function logMensagem(mensagem) {
  console.log("📢 " + mensagem);
}

// Exemplo de uso da função
logMensagem("Arquivo script.js carregado!");
