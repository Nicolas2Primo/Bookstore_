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
    <div className="fixed flex flex-col left-0  right-0 justify-center items-center top-0 h-[115px] w-screen  shadow-md z-10 bg-[#457975] ">
      <nav className="flex flex-col  items-center justify-center w-full gap-0">
        <img src="Book Dream Logo.png" alt="" className="scale-[0.59]    " />
        <div className="grid grid-cols-3 w-full py-1 mt-[-10px] items-center justify-between divide-x divide-[#4e8984] border-t-2 border-[#4e8984]  text-white text-[13px] font-rosarivo font-extralight bg-[#3a6b67]">
          <span className="hover:cursor-pointer hover:text-gray-300  text-center">
            Livros
          </span>
          <span className="hover:cursor-pointer hover:text-gray-300 text-center">
            Autores
          </span>
          <span className="hover:cursor-pointer hover:text-gray-300 text-center">
            Editoras
          </span>
        </div>
      </nav>
    </div>
  );
};

export default NavbarLivraria;
