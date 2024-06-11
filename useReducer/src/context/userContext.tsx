'use client'

import reducer from '@/reducer/userReducer';
import axios from 'axios';
import React, { createContext, useContext, useEffect, useReducer } from 'react';


const UserContext = createContext();

const API = "https://api.escuelajs.co/api/v1/users";

const initialState = {
  isLoading: false,
  isError: true,
  users: []
};

export const UserContextProvider = ({ children }) => {
const [state, dispatch] = useReducer(reducer, initialState);

    const getUsers = async (url) => {
        // debugger
        dispatch({ type: "SET_LOADING" });
        try {
        const res = await axios.get(url);
        const products = await res?.data;
        dispatch({ type: "SET_API_DATA", payload: products });
        } catch (error) {
        dispatch({ type: "API_ERROR" });
        }
    };

    useEffect(() => {
        getUsers(API);
      }, []);

  return (
    <UserContext.Provider value={{ ...state }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);

export default UserContext; // Optionally, export default if needed
