import { useEffect } from 'react';
import { initDb, initProductsDb } from './database/db'; // Importação do arquivo database.js na raiz do projeto
import { AuthContextProvider } from './src/context/auth-context';
import { CartContextProvider } from './src/context/cart-context';
import Root from './src/routes/Root';

export default function App() {
  useEffect(() => {
    initDb().then(() => {
      console.log("Inicialização do banco de dados 'users' concluída.");
    }).catch(err => {
      console.log("Inicialização do banco de dados 'users' falhou.");
      console.log(err);
    });

    initProductsDb().then(() => {
      console.log("Inicialização do banco de dados 'products' concluída.");
    }).catch(err => {
      console.log("Inicialização do banco de dados 'products' falhou.");
      console.log(err);
    });
  }, []);

  return (
    <AuthContextProvider>
      <CartContextProvider>
        <Root />
      </CartContextProvider>
    </AuthContextProvider>
  );
}
