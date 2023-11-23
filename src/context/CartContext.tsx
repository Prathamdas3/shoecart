import React, { useState, useEffect, createContext, useContext } from 'react';
type childT = {
  children: React.ReactNode;
};
type ApiType = {
  state?: string;
  setState?: React.Dispatch<React.SetStateAction<string>>;
};
const apiContext = createContext<ApiType | null>(null);

export const ContextProvider = ({ children }: childT) => {
  const [state, setState] = useState<string>();
  const data = {};
  return <apiContext.Provider value={data}>{children}</apiContext.Provider>;
};

export const useApiContextProvider = () => {
  const contextData = useContext(apiContext);
  if (!contextData) {
    throw new Error('context must be used inside the provider');
  }
  return contextData;
};
