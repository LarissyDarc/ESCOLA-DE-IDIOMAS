import {
  adicionarProduto,
  buscarProdutoPorId,
  listarProdutos,
  produtosIniciais,
  validarProduto,
} from "../produtos.js";

describe("regras de negócio de produtos", () => {
  test("retorna a lista completa de produtos", () => {
    expect(listarProdutos()).toEqual([
      { id: 1, nome: "Notebook", preco: 3500 },
      { id: 2, nome: "Mouse", preco: 100 },
    ]);
  });

  test("busca um produto pelo ID", () => {
    expect(buscarProdutoPorId(produtosIniciais, 2)).toEqual({
      id: 2,
      nome: "Mouse",
      preco: 100,
    });
  });

  test("retorna undefined quando o ID não existe", () => {
    expect(buscarProdutoPorId(produtosIniciais, 99)).toBeUndefined();
  });

  test("aceita produto com nome e preço válidos", () => {
    expect(validarProduto({ nome: "Teclado", preco: 250 })).toBe(true);
  });

  test.each(["", "   ", null, 42])("rejeita nome inválido: %s", (nome) => {
    expect(validarProduto({ nome, preco: 250 })).toBe(false);
  });

  test.each([0, -1, NaN, Infinity, "250"])(
    "rejeita preço inválido: %s",
    (preco) => {
      expect(validarProduto({ nome: "Teclado", preco })).toBe(false);
    },
  );

  test("adiciona um produto válido sem alterar a lista original", () => {
    const listaOriginal = listarProdutos();
    const listaAtualizada = adicionarProduto(listaOriginal, {
      nome: "Teclado",
      preco: 250,
    });

    expect(listaAtualizada).toEqual([
      ...listaOriginal,
      { id: 3, nome: "Teclado", preco: 250 },
    ]);
    expect(listaOriginal).toHaveLength(2);
  });

  test("não adiciona produto inválido", () => {
    expect(adicionarProduto(produtosIniciais, { nome: "", preco: 250 })).toBe(
      false,
    );
    expect(produtosIniciais).toHaveLength(2);
  });
});
