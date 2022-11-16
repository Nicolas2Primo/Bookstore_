import React from "react";
import { HiMenu } from "react-icons/hi";

const NavbarLivraria = () => {
  const Livros = () => {
    console.log("Clicou em Livros");
  };
  const Autores = () => {
    console.log("Clicou em Autores");
  };
  const Editoras = () => {
    console.log("Clicou em Editoras");
  };

  return (
    <div className="fixed flex flex-col left-0  right-0 justify-center items-center top-0 h-[110px] w-screen  shadow-md z-10 bg-[#457975] ">
      <nav className="flex  items-center justify-center w-full">
        <img src="Book Dream Logo.png" alt="" className="scale-[0.59]    " />
      </nav>
    </div>
  );
};

export default NavbarLivraria;
