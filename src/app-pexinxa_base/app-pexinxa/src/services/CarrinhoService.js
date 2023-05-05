import Database from './DBServices.js';

const DB_EXEC = Database.getConnection();

export const getCarrinho = async () => {
  let results = await DB_EXEC(`select * from produto`);
  return results.rows._array;
}

export const insertCarrinho = async (params) => {
  let results = await DB_EXEC(`insert into carrinho (produto, preco, quantidade_produto, data_criacao, vendedor)
  values(?,?,?,?)`, [params.produto, params.preco, params.quantidade_produto, params.data_criacao, params.vendedor]);
  return results.rowsAffected;
}
