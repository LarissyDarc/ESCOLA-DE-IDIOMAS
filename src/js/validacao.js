export function validarCadastro(nome, email, campoObrigatorio) {
  const nomeTratado = typeof nome === "string" ? nome.trim() : "";
  const emailTratado = typeof email === "string" ? email.trim() : "";
  const campoTratado =
    typeof campoObrigatorio === "string" ? campoObrigatorio.trim() : "";

  if (!nomeTratado || !emailTratado || !campoTratado) {
    return "Todos os campos são obrigatórios";
  }

  if (nomeTratado.length < 3) {
    return "O nome deve ter pelo menos 3 caracteres";
  }

  return null;
}
