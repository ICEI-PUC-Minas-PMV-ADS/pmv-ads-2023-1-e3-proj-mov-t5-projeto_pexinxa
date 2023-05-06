import Database from './DBServices.js';

const DB_EXEC = Database.getConnection();

export const getConsumidor = async () => {
  let results = await DB_EXEC(`select * from consumidor`);
  return results.rows._array;
}

export const insertConsumidor = async (param) => {
  let results = await DB_EXEC(`insert into consumidor (cadastro)
  values(?,?,?,?)`, [param.cadastro]);
  return results.rowsAffected;
}

export const updateConsumidor = async (param) => {
  let results = await DB_EXEC(`update consumidor cadastro=?
  where id=?`, [param.cadastro]);
  return results.rowsAffected;
}

export const deleteConsumidor = async (id) => {
  let results = await DB_EXEC(`delete from consumidor where id=?`, [id]);
  return results.rowsAffected;
}
