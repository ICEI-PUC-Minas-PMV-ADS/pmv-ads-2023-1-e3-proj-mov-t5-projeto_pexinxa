import { AuthContextProvider } from './src/context/auth-context';
import { CartContextProvider } from './src/context/cart-context';
import Root from './src/routes/Root';

export default function App() {
  return (
    <AuthContextProvider>
      <CartContextProvider>
        <Root />
      </CartContextProvider>
    </AuthContextProvider>
  );
}
