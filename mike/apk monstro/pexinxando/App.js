import React, { useEffect } from 'react';
import { AuthProvider } from './src/context/auth-context';
import AppNavigator from './src/AppNavigator';
import { initDb } from './database/db';
import { createRoot } from 'react-dom';

const App = () => {
  useEffect(() => {
    console.log('Renderizando o AppNavigator...');
    initDb()
      .then(() => {
        console.log('Database initialized successfully');
      })
      .catch((error) => {
        console.log('Error initializing database:', error);
      });
  }, []);

  return createRoot(document.getElementById('root')).render(
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
};

export default App;
