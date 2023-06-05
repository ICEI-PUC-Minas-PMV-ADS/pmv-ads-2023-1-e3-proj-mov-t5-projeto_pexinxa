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

export const initProductsDb = async () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY AUTOINCREMENT, nomeProduto TEXT, valorProduto TEXT, categoria TEXT, descricao TEXT);',
        [],
        () => {
          resolve();
        },
        (_, error) => {
          console.error('Error creating products table:', error);
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

export const registerProduct = async (nomeProduto, valorProduto, categoria, descricao) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO products (nomeProduto, valorProduto, categoria, descricao) VALUES (?, ?, ?, ?);',
        [nomeProduto, valorProduto, categoria, descricao],
        (_, { insertId }) => {
          resolve(insertId);
        },
        (_, error) => {
          console.error('Error inserting product:', error);
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

export const getProduct = async (nomeProduto) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM products WHERE nomeProduto = ?;',
        [nomeProduto],
        (_, { rows }) => {
          if (rows.length > 0) {
            resolve(rows._array);
          } else {
            resolve(null);
          }
        },
        (_, error) => {
          console.error('Error getting product:', error);
          reject(error);
        }
      );
    });
  });
};
