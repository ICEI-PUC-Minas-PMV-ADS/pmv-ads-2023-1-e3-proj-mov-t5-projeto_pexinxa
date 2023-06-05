import Database from './DBServices.js';

const DB_EXEC = Database.getConnection();

export const getCarrinho = async () => {
  let results = await DB_EXEC(`select * from produto`);
  return results.rows._array;
}

export const insertCarrinho = async (param) => {
  let results = await DB_EXEC(`insert into carrinho (produto, preco, quantidade_produto, data_criacao, vendedor)
  values(?,?,?,?)`, [param.produto, param.preco, param.quantidade_produto, param.data_criacao, param.vendedor]);
  return results.rowsAffected;
}

export const updateCarrinho = async (param) => {
  let results = await DB_EXEC(`update carrinho produto=?, preco=?, quantidade_produto=?, data_criacao=?, vendedor=?)
  where id=?`, [param.produto, param.preco, param.quantidade_produto, param.data_criacao, param.vendedor]);
  return results.rowsAffected;
}

export const deleteCarrinho = async (id) => {
  let results = await DB_EXEC(`delete from gastos where id=?`, [id]);
  return results.rowsAffected;
}
