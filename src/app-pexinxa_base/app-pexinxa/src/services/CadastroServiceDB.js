import Database from './DBServices.js';

const DB_EXEC = Database.getConnection();

export const getCadastro = async () => {
  let results = await DB_EXEC(`select * from cadastro`);
  return results.rows._array;
}

export const insertCadastro = async (params) => {
  let results = await DB_EXEC(`insert into cadastro (nome, cpf_cnpj, email, senha)
  values(?,?,?,?)`, [params.nome, params.cpf_cnpj, params.email, params.senha]);
  return results.rowsAffected;
}
