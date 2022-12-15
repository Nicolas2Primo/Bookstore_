import React from "react";
import { createContext, useState, useEffect } from "react";
import Axios from "axios";

const LivroContext = createContext();

const getWindowSize = () => {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
};

export const LivroProvider = ({ children }) => {
  const [livro, setLivro] = useState();
  const [sizeScreen, setSizeScreen] = useState(getWindowSize());

  useEffect(() => {
    Axios.get("http://localhost:3001/getLivros").then((response) => {
      setLivro(response.data);
    });
  }, []);

  useEffect(() => {
    const handleWindowResize = () => {
      setSizeScreen(getWindowSize());
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <LivroContext.Provider
      value={{ livro, setLivro, sizeScreen, setSizeScreen }}
    >
      {children}
    </LivroContext.Provider>
  );
};

export default LivroContext;
