import React from "react";
import LivroSwiper from "../components/LivroSwiper";
import NavbarLivraria from "../components/NavBarLivraria";

function Livraria() {
  return (
    <div className="flex h-screen w-screen overflow-y-hidden">
      <img
        src="Fundo Home.png"
        alt=""
        className=" h-[87.4vh] w-screen md:h-[88.7vh]"
      />
      <NavbarLivraria className="" />
      <div className="  bg-[#365B6D] w-screen h-[87.4vh] md:h-[88.7vh] absolute bg-opacity-20 flex flex-col items-center justify-center gap-10">
        <LivroSwiper></LivroSwiper>
      </div>
    </div>
  );
}

export default Livraria;
