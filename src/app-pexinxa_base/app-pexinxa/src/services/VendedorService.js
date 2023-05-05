import Database from './DBServices.js';

const DB_EXEC = Database.getConnection();

export const getVendedor = async () => {
  let results = await DB_EXEC(`select * from vendedor`);
  return results.rows._array;
}

export const insertVendedor = async (params) => {
  let results = await DB_EXEC(`insert into vendedor (cadastro, endereco)
  values(?,?,?,?)`, [params.cadastro, params.endereco]);
  return results.rowsAffected;
}
