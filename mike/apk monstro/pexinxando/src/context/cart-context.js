import { useReducer, createContext } from 'react';

export const CartContext = createContext();

const initialState = { items: [], total: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'add_item':
      return {
        items: [...state.items, action.payload],
        total: state.total + action.payload.price,
      };
    case 'remove_item':
      return {
        items: state.items.filter((item) => item !== action.payload),
        total: state.total - action.payload.price,
      };
    default:
      return state;
  }
};

export const CartContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={[state, dispatch]}>
      {props.children}
    </CartContext.Provider>
  );
};
