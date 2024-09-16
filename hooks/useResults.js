import { useEffect, useState } from "react";
import api from "../api/api";

export default () => {
  const [results, setResults] = useState([]);

  const searchApi = async (searchTerm, location) => {
    try {
      const response = await api.get("/search", {
        params: {
          productName: searchTerm,
          location: location,
        },
      });
      console.log("useResults hook response: ", response.data);
      setResults(response.data);
    } catch (error) {
      console.error("API request error(useResults):", error);
    }
  };

  useEffect(() => {
    searchApi("Tuz");
  }, []);

  return [searchApi, results];
};
