import React from "react";
import LivroSwiper from "../components/LivroSwiper";
import NavbarLivraria from "../components/NavBarLivraria";

function Livraria() {
  return (
    <div className="flex h-screen w-screen overflow-y-hidden">
      <img src="Fundo Home.png" alt="" className=" h-screen w-screen" />
      <NavbarLivraria/>
      <div className=" bg-[#365B6D] w-full h-full absolute bg-opacity-20 flex flex-col items-center justify-center gap-10">
        {/* <LivroSwiper></LivroSwiper> */}
      </div>
    </div>
  );
}

export default Livraria;
