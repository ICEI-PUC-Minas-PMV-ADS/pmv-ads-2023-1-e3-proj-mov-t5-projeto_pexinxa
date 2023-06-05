import { useReducer, createContext } from 'react';

export const AuthContext = createContext();

const initialState = { isLogin: false };

const reducer = (state, action) => {
  switch (action.type) {
    case 'user_login':
      return { isLogin: action.payload };
    case 'user_logout':
      return { isLogin: action.payload };
    default:
      state;
  }
};

export const AuthContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={[state, dispatch]}>
      {props.children}
    </AuthContext.Provider>
  );
};
