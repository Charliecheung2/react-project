import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isModalShow, setIsModalShow] = useState(false);
  const [isSidebarShow, setIsSidebarShow] = useState(false);

  const openModal = () => {
    setIsModalShow(true);
  };
  const closeModal = () => {
    setIsModalShow(false);
  };
  const openSidebar = () => {
    setIsSidebarShow(true);
  };
  const closeSidebar = () => {
    setIsSidebarShow(false);
  };
  return (
    <AppContext.Provider
      value={{
        isModalShow,
        isSidebarShow,
        openModal,
        closeModal,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
