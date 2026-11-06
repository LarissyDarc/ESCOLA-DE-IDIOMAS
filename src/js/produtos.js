export const produtosIniciais = [
  { id: 1, nome: "Notebook", preco: 3500 },
  { id: 2, nome: "Mouse", preco: 100 },
];

export function listarProdutos(produtos = produtosIniciais) {
  return [...produtos];
}

export function buscarProdutoPorId(produtos, id) {
  return produtos.find((produto) => produto.id === id);
}

export function validarProduto(produto) {
  return Boolean(
    produto &&
      typeof produto.nome === "string" &&
      produto.nome.trim().length > 0 &&
      typeof produto.preco === "number" &&
      Number.isFinite(produto.preco) &&
      produto.preco > 0,
  );
}

export function adicionarProduto(produtos, novoProduto) {
  if (!validarProduto(novoProduto)) {
    return false;
  }

  const proximoId = produtos.reduce(
    (maiorId, produto) => Math.max(maiorId, produto.id),
    0,
  ) + 1;

  return [...produtos, { ...novoProduto, id: proximoId }];
}
