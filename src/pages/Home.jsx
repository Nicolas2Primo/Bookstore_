import { Link } from "react-router-dom";
import React from "react";
import NavbarHome from "../components/NavbarHome";

function Home() {
  return (
    <div className="flex h-screen w-screen overflow-y-hidden">
      <img src="Fundo Home.png" alt="" className=" h-screen w-screen" />
      <NavbarHome/>
      <div className=" bg-[#365B6D] w-full h-full absolute bg-opacity-20 flex flex-col items-center justify-center gap-10">
        <span className=" text-2xl w-[550px] text-center text-white font-light italic">
          "O livro é uma extensão da memória e da imaginação" Jorge Luis Borges
        </span>
        <span className="text-white text-3xl font-rosarivo  w-[610px] h-[70px] text-center border-b-2">
          SEJA BEM VINDO
        </span>
        <Link
          to="/livraria"
          className="text-white text-xl bg-[#4A6B7C] hover:bg-[#456473] px-20 py-3 rounded-lg"
        >
          Entrar
        </Link>
      </div>
    </div>
  );
}

export default Home;
