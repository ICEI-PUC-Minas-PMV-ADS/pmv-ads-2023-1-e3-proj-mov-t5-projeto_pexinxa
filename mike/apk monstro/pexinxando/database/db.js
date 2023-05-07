import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('myDatabase.db');

export const initDb = async () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, doc TEXT, mail TEXT, senha TEXT, cep TEXT, rua TEXT, numero TEXT, complemento TEXT, bairro TEXT, cidade TEXT, estado TEXT, telefone TEXT);',
        [],
        () => {
          resolve();
        },
        (_, error) => {
          console.error('Error creating users table:', error);
          reject(error);
        }
      );
    });
  });
};

export const dropTable = async () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'DROP TABLE IF EXISTS users;',
        [],
        () => {
          resolve();
        },
        (_, error) => {
          console.error('Error dropping users table:', error);
          reject(error);
        }
      );
    });
  });
};

export const registerUser = async (nome, doc, mail, senha, cep, rua, numero, complemento, bairro, cidade, estado, telefone) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO users (nome, doc, mail, senha, cep, rua, numero, complemento, bairro, cidade, estado, telefone) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);',
        [nome, doc, mail, senha, cep, rua, numero, complemento, bairro, cidade, estado, telefone],
        (_, { insertId }) => {
          resolve(insertId);
        },
        (_, error) => {
          console.error('Error inserting user:', error);
          reject(error);
        }
      );
    });
  });
};

export const getUser = async (email, password) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM users WHERE mail = ? AND senha = ?;',
        [email, password],
        (_, { rows }) => {
          if (rows.length > 0) {
            resolve(rows.item(0));
          } else {
            resolve(null);
          }
        },
        (_, error) => {
          console.error('Error getting user:', error);
          reject(error);
        }
      );
    });
  });
};
