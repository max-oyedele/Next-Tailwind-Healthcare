import React, { useState, useEffect, useContext, createContext } from 'react';

const appContext = createContext();

export function AppProvider({ children }) {
  const app = useApp();
  return <appContext.Provider value={app}>{children}</appContext.Provider>;
}

export const useProvider = () => {
  return useContext(appContext);
};

function useApp() {
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState(null)
  const [call, setCall] = useState(null)
  const [error, setError] = useState(null)
  
  return {
    loading,
    user,
    call,
    error,
    setLoading,
    setUser,
    setCall
  };
}

