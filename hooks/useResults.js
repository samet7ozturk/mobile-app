import { useEffect, useState } from "react";

export default () => {
  const [results, setResults] = useState([]);

  const searchApi = async (searchTerm) => {
    const response = await api.get("/search", {
      params: {
        limit: 50,
        term: searchTerm,
        location: "İstanbul",
      },
    });
    setResults(response.data);
  };

  useEffect(() => {
    searchApi("Toast");
  }, []);

  return [searchApi, results];
};
