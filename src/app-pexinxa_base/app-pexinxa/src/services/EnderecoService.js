import Database from './DBServices.js';

const DB_EXEC = Database.getConnection();

export const getEndereco = async () => {
  let results = await DB_EXEC(`select * from endereco`);
  return results.rows._array;
}

export const insertEndereco = async (params) => {
  let results = await DB_EXEC(`insert into endereco (rua, numero, bairro, cidade, estado, pais)
  values(?,?,?,?)`, [params.rua, params.numero, params.bairro, params.cidade, params.estado, params.pais]);
  return results.rowsAffected;
}
