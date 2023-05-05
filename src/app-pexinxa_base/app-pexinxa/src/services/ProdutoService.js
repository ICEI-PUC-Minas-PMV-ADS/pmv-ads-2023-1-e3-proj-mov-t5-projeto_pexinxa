import Database from './DBServices.js';

const DB_EXEC = Database.getConnection();

export const getProduto = async () => {
  let results = await DB_EXEC(`select * from produto`);
  return results.rows._array;
}

export const insertProduto = async (params) => {
  let results = await DB_EXEC(`insert into produto (nome, descricao, preco, imagem, categoria, quantidade, data_cadastro, vendedor)
  values(?,?,?,?)`, [params.nome, params.descricao, params.preco, params.imagem, params.categoria, params.quantidade, params.data_cadastro, params.vendedor]);
  return results.rowsAffected;
}
