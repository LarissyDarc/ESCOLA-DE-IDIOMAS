import { validarCadastro } from "../validacao.js";

describe("validarCadastro", () => {
  const emailValido = "ana@example.com";
  const senhaValida = "senha-forte";

  test.each(["", " ", "   "])('rejeita nome vazio ou só com espaços: "%s"', (nome) => {
    expect(validarCadastro(nome, emailValido, senhaValida)).toBe(
      "Todos os campos são obrigatórios",
    );
  });

  test.each(["Al", " Al "])('rejeita nome curto: "%s"', (nome) => {
    expect(validarCadastro(nome, emailValido, senhaValida)).toBe(
      "O nome deve ter pelo menos 3 caracteres",
    );
  });

  test.each(["Ana", " Ana "])('aceita nome válido: "%s"', (nome) => {
    expect(validarCadastro(nome, emailValido, senhaValida)).toBeNull();
  });
});
