import Database from './DBServices.js';

const DB_EXEC = Database.getConnection();

export const getProduto = async () => {
  let results = await DB_EXEC(`select * from produto`);
  return results.rows._array;
}

export const insertProduto = async (param) => {
  let results = await DB_EXEC(`insert into produto (nome, descricao, preco, imagem, categoria, quantidade, data_cadastro, vendedor)
  values(?,?,?,?)`, [param.nome, param.descricao, param.preco, param.imagem, param.categoria, param.quantidade, param.data_cadastro, param.vendedor]);
  return results.rowsAffected;
}

export const updateProduto = async (param) => {
  let results = await DB_EXEC(`update produto set nome=?, descricao=?, preco=?, imagem=?, categoria=?, quantidade=?, data_cadastro=?, vendedor=?)
  where=id?`, [param.nome, param.descricao, param.preco, param.imagem, param.categoria, param.quantidade, param.data_cadastro, param.vendedor]);
  return results.rowsAffected;
}

export const deleteProduto = async (id) => {
  let results = await DB_EXEC(`delete from gastos where id=?`, [id]);
  return results.rowsAffected;
}
