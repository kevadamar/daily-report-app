import React, { useReducer, createContext } from 'react';
import { removeDataLocal, storeDataLocal } from '../../Services/local';
import { LOGIN_ACTION, LOGOUT_ACTION } from './nameAction';

export const UserContext = createContext();

const initialState = {
  isLogin: false,
  token: '',
  user: {
    nik: '',
    fullname: '',
    position: '',
  },
};

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_ACTION:
      storeDataLocal({ key: 'token', data: payload.token });
      return {
        ...state,
        user: payload.user,
        token: payload.token,
        isLogin: true,
      };

    case LOGOUT_ACTION:
      removeDataLocal({ key: 'token' });
      return {
        ...state,
        isLogin: false,
        token: '',
        user: {
          nik: '',
          fullname: '',
          position: '',
        },
      };
    default:
      throw new Error('case unknown');
  }
};

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  return (
    <UserContext.Provider value={{ userState: state, userDispatch: dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
