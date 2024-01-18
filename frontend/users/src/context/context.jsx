import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [toggled, setToggled] = useState(false);
  const [login, setLogin] = useState(false);
  const [addProductStatus, setAddProductStatus] = useState(false);

  const handleLogin = () => {
    const loginStatus = localStorage.getItem('loginStatus')
    if (!loginStatus) {
      setLogin(false);
    } else {
      setLogin(true);
    }
  }
  useEffect(() => {
    handleLogin();
  });

  const navigate = useNavigate()

  const handleToggled = () => {
    setToggled(!toggled);
  }

  

  return <AppContext.Provider value={{ login, setLogin, toggled, handleToggled, addProductStatus, setAddProductStatus }}>
    {children}
  </AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, AppContext }