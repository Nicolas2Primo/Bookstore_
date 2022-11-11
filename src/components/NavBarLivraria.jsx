import React from "react";

const NavbarLivraria = () => {
  const Livros = () => {
    console.log("Clicou em Livros")
  }
  const Autores = () => {
    console.log("Clicou em Autores")
  }
  const Editoras = () => {
    console.log("Clicou em Editoras")
  }

  return (
    <div className="fixed flex left-0 right-0 top-0 h-[110px] shadow-md z-10 bg-[#457975]">
      <nav className="flex items-center container mx-auto h-full ">
        <img src="Book Dream Logo.png" alt="" className="scale-[0.59]"  />
          <ul className="px-8 cursor-pointer text-0xl font-rosarivo w-[500px] text-right text-white font-light">
            <li onClick={Livros}>LIVROS</li>
          </ul>
          <ul className="px-8 cursor-pointer text-0xl font-rosarivo text-right text-white font-light">
            <li onClick={Autores}>AUTORES</li>
          </ul>
          <ul className="px-8 cursor-pointer text-0xl font-rosarivo text-right text-white font-light">
            <li onClick={Editoras}>EDITORAS</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavbarLivraria;
