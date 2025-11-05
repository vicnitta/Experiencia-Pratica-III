export function mostrarMensagem(mensagem, tipo = "info") {
    const div = document.createElement("div");
    div.textContent = mensagem;
    div.className = tipo;
    document.body.appendChild(div);
    setTimeout(() => div.remove(), 3000);
}