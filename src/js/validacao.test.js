import { describe, expect, it } from "@jest/globals";
import { validarCadastro } from "./validacao.js";

const emailValido = "ana@example.com";
const senhaValida = "senha-valida";

describe("validarCadastro", () => {
  it("rejeita nome vazio e com apenas espa\u00e7os como campo obrigat\u00f3rio", () => {
    expect(validarCadastro("", emailValido, senhaValida)).toBe("Todos os campos s\u00e3o obrigat\u00f3rios");
    expect(validarCadastro(" ", emailValido, senhaValida)).toBe("Todos os campos s\u00e3o obrigat\u00f3rios");
  });

  it("rejeita nomes com menos de tr\u00eas caracteres depois do trim", () => {
    const mensagem = "O nome deve ter pelo menos 3 caracteres";
    expect(validarCadastro("Al", emailValido, senhaValida)).toBe(mensagem);
    expect(validarCadastro(" Al ", emailValido, senhaValida)).toBe(mensagem);
  });

  it("aceita nomes com pelo menos tr\u00eas caracteres, mesmo com espa\u00e7os nas pontas", () => {
    expect(validarCadastro("Ana", emailValido, senhaValida)).toBe("");
    expect(validarCadastro(" Ana ", emailValido, senhaValida)).toBe("");
  });
});
