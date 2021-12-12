import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { loading, cocktails } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return <h2 className="section-title">no matching cocktail</h2>;
  }
  return cocktails.map((item) => <Cocktail key={item.idDrink} {...item} />);
};

export default CocktailList;
