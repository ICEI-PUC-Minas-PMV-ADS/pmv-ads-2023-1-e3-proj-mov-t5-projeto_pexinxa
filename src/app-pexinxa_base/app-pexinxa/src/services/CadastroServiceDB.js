import Database from './DBServices.js';

const DB_EXEC = Database.getConnection();

export const getCadastro = async () => {
  let results = await DB_EXEC(`select * from cadastro`);
  return results.rows._array;
}

export const insertCadastro = async (params) => {
  let results = await DB_EXEC(`insert into cadastro (nome, doc, mail, senha, cep, rua, numero, complemento, bairro, cidade, estado, telefone)
  values(?,?,?,?)`, [params.nome, params.doc, params.mail, params.senha, params.dep, params.rua, params.numero, params.complemento, params.bairro, params.cidade, params.estado, params.telefone]);
  return results.rowsAffected;
}
