import React, { createContext, useContext, useReducer } from 'react';

//preparing data layer
export const StateContext = createContext();

//this block wraps our app inside the stateProvider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//used to pull something from the data layer
export const useStateValue = () => useContext(StateContext);