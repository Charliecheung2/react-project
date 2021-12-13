import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktails] = useState([]);

  const fetchList = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      setLoading(false);
      if (data.drinks) {
        const newDrinks = data.drinks.map((item) => {
          const {
            idDrink,
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strGlass
          } = item;
          return {
            id: idDrink,
            name: strDrink,
            pic: strDrinkThumb,
            alcoholic: strAlcoholic,
            glass: strGlass
          };
        });
        setCocktails(newDrinks);
      } else {
        setCocktails([]);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchList();
  }, [searchTerm, fetchList]);

  return (
    <AppContext.Provider value={{ loading, setSearchTerm, cocktails }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
