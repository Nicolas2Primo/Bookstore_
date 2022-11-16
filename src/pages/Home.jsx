import { Link } from "react-router-dom";
import React from "react";
import NavbarHome from "../components/NavbarHome";

function Home() {
  return (
    <div className="flex w-screen h-screen  ">
      <img
        src="Fundo Home.png"
        alt=""
        className=" h-[87.4vh] w-screen md:h-[88.7vh]"
      />

      <NavbarHome />
      <div className=" bg-[#365B6D] w-screen h-[87.4vh] md:h-[88.7vh] absolute bg-opacity-20 flex flex-col items-center justify-center gap-[37px]">
        <span className=" text-md md:text-xl w-[180px] md:w-[453px] text-center text-white font-light italic">
          "O livro é uma extensão da memória e da imaginação" Jorge Luis Borges
        </span>
        <span className="text-white  text-2xl md:text-3xl font-rosarivo w-[270px] md:w-[400px] h-[62px] text-center border-b-2">
          SEJA BEM VINDO
        </span>
        <Link
          to="/livraria"
          className="text-white text-xl bg-[#457975] hover:bg-[#3f7470] px-14 md:px-20 py-2 md:py-3 rounded-lg"
        >
          Entrar
        </Link>
      </div>
    </div>
  );
}

export default Home;
