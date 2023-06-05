import Database from './DBServices.js';

const DB_EXEC = Database.getConnection();

export const getVendedor = async () => {
  let results = await DB_EXEC(`select * from vendedor`);
  return results.rows._array;
}

export const insertVendedor = async (param) => {
  let results = await DB_EXEC(`insert into vendedor (cadastro)
  values(?,?,?,?)`, [param.cadastro]);
  return results.rowsAffected;
}

export const updateVendedor = async (param) => {
  let results = await DB_EXEC(`update vendedor set cadastro=?
  where id=?`, [param.cadastro]);
  return results.rowsAffected;
}

export const deleteVendedor = async (id) => {
  let results = await DB_EXEC(`delete from vendedor where id=?`, [id]);
  return results.rowsAffected;
}
