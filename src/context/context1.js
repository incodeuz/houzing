import React, { createContext, useState } from "react";

export const ContextApi = createContext();

const Context = ({ children }) => {
  const [data, setData] = useState([]);
  return (
    <ContextApi.Provider value={[data, setData]}>
      {children}
    </ContextApi.Provider>
  );
};

export default Context;
