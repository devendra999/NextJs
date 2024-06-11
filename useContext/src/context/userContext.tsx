'use client'

import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

const initialState = {
  isLoading: false,
  isError: true,
  count: 0
};

export const UserContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  return (
    <UserContext.Provider value={{ state, setState }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);

export default UserContext; // Optionally, export default if needed
