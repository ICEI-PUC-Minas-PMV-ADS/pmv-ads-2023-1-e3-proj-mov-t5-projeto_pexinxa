import React, { createContext, useReducer } from 'react';

const initialState = {
  isAuthenticated: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'user_login':
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    default:
      return state;
  }
};

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={[state, dispatch]}>
      {children}
    </AuthContext.Provider>
  );
};
