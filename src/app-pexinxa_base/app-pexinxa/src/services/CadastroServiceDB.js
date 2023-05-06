import Database from './DBServices.js';

const DB_EXEC = Database.getConnection();

export const getCadastro = async () => {
  let results = await DB_EXEC(`select * from cadastro`);
  return results.rows._array;
}

export const insertCadastro = async (param) => {
  let results = await DB_EXEC(`insert into cadastro (nome, doc, mail, senha, cep, rua, numero, complemento, bairro, cidade, estado, telefone)
  values(?,?,?,?)`, [param.nome, param.doc, param.mail, param.senha, param.dep, param.rua, param.numero, param.complemento, param.bairro, param.cidade, param.estado, param.telefone]);
  return results.rowsAffected;
}

export const updateCadastro = async (param) => {
  let results = await DB_EXEC(`update cadastro set nome=?, doc=?, mail=?, senha=?, cep=?, rua=?, numero=?, complemento=?, bairro=?, cidade=?, estado=?, telefone=?
  where id=?`, [param.nome, param.doc, param.mail, param.senha, param.dep, param.rua, param.numero, param.complemento, param.bairro, param.cidade, param.estado, param.telefone]);
  return results.rowsAffected;
}

export const deleteCadastro = async (id) => {
  let results = await DB_EXEC(`delete from gastos where id=?`, [id]);
  return results.rowsAffected;
}
