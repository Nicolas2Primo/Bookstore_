import React from "react";
import { createContext, useState, useEffect } from "react";
import Axios from "axios";

const RatingContext = createContext();

export const RatingProvider = ({ children }) => {
  const [avaliacoes, setAvaliacoes] = useState();

  useEffect(() => {
    Axios.get("http://localhost:3001/getAvaliacoes").then((response) => {
      setAvaliacoes(response.data);
    });
  }, []);

  return (
    <RatingContext.Provider value={{ avaliacoes, setAvaliacoes }}>
      {children}
    </RatingContext.Provider>
  );
};

export default RatingContext;
