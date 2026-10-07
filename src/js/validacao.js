export function validarNome(nome) {
  const nomeLimpo = nome.trim();
  if (!nomeLimpo) return "Todos os campos s\u00e3o obrigat\u00f3rios";
  if (nomeLimpo.length < 3) return "O nome deve ter pelo menos 3 caracteres";
  return "";
}

export function validarCadastro(nome, email, senha) {
  if (!email?.trim() || !senha?.trim()) {
    return "Todos os campos s\u00e3o obrigat\u00f3rios";
  }
  return validarNome(nome);
}
