import { useState, useEffect } from "react";
import paginate from "./utils";
const url = "https://api.github.com/users/aristocratos/followers?per_page=100";

export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const separateData = (data) => {
    const peoplePerPage = 12;
    let pages = Math.ceil(data.length / peoplePerPage);
    const newData = Array.from({ length: pages }, (_, i) => {
      let start = peoplePerPage * i;
      return data.slice(start, start + peoplePerPage);
    });
    return newData;
  };

  const getProducts = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(separateData(data));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return { loading, data };
};
