import * as SQLite from 'expo-sqlite';


const Database = {
  getConnection: () => {
    const db = SQLite.openDatabase("pechincha.db");

    db.transaction((tx) => {

      tx.executeSql('create table if not exists cadastro (nome text not null, doc text primary key not null, mail text not null, senha text not null, cep text not null, rua text not null, numero int not null, complemento text not null, bairro text not null, cidade text not null, estado text not null, telefone text not null, uuid text not null)');

      tx.executeSql('create table if not exists vendedor (cadastro int8 foreign key not null, endereco int8 foreing key not null, uuid text primary key not null)');

      tx.executeSql('create table if not exists consumidor (cadastro int8 foreign key not null, endereco int8 foreing key not null, uuid text primary key not null)');

      tx.executeSql('create table if not exists produto (descricao text not null, preco int not null, quantidade int not null, data_cadastro date not null, vendedor int8 foreing key not null, uuid text primary key not null)');

      tx.executeSql('create table if not exists carrinho (produto int8 foreign key not null, quantidade_produto int not null, data_criacao date not null, vendedor int8 foreing key not null, uuid text primary key not null)');

    });

    const ExecuteQuery = (sql, params = []) => {

      new Promise((resolve, reject) => {
        db.transaction((trans) => {
          trans.executeSql(
            sql,
            params,
            (trans, results) => {
              resolve(results);
            },
            (error) => {
              reject(error);
            }
          );
        });
      });
      
      return ExecuteQuery;
    };

    
  },
};

export default Database;
