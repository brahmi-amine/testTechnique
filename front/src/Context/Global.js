import React, { createContext, useEffect, useReducer, useState } from "react";

let tokenReducer = (token, newToken) => {
  if (newToken === "") {
    localStorage.removeItem("token");
    return "";
  }
  return newToken;
};

const tokenLocalState = localStorage.getItem("token");

export const GlobalContext = createContext();

function Global({ children }) {
  const [token, setToken] = useReducer(tokenReducer, tokenLocalState || "");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    localStorage.setItem("token", token);
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [token, messages]);

  return (
    <GlobalContext.Provider
      value={{
        token,
        setToken,
        messages,
        setMessages,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default Global;
