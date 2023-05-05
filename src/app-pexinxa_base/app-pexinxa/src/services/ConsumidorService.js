import Database from './DBServices.js';

const DB_EXEC = Database.getConnection();

export const getConsumidor = async () => {
  let results = await DB_EXEC(`select * from vendedor`);
  return results.rows._array;
}

export const insertConsumidor = async (params) => {
  let results = await DB_EXEC(`insert into consumidor (cadastro, endereco)
  values(?,?,?,?)`, [params.cadastro, params.endereco]);
  return results.rowsAffected;
}
