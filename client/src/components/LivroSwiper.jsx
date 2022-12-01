import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import ModalLivro from "./ModalLivro";

import Axios from "axios";
import "swiper/css";

const LivroSwiper = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [livros, setLivros] = useState();
  const [livroInfo, setLivroInfo] = useState();

  const capas = [
    `/AliceNoPaísDasMaravilhas.png`,
    "/AnneDeGreenGables.png",
    "/AsMilEUmaNoites.png",
    "/Ben-Hur.png",
    "/OLeãoAFeiticeira.png",
    "/DiárioDeUmBanana.png",
    "/DomCasmurro.png",
    "/DomQuixote.png",
    "/HarryPotterCáliceDeFogo.png",
    "/HarryPotterPedraFilosofal.png",
    "/OPequenoPríncipe.png",
    "/UmAmorParaRecordar.png",
    "/OrgulhoEPreconceito.png",
    "/OPeregrino.png",
    "/SenhorDosAneis.png",
    "/OsSertões.png",
    "/Ilíada.png",
    "/JogosVorazesEmChamas.png",
    "/Hobbit.png",
    "/PríncipeCaspiam.png",
  ];

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/getLivros").then((response) => {
      setLivros(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div className="w-screen h-screen flex items-center justify-center px-[3px] sticky">
      <Swiper
        className="w-screen h-[180px] text-center"
        loop={true}
        spaceBetween={10}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {typeof livros !== "undefined" &&
          livros.map((livro, index) => (
            <SwiperSlide
              key={livro.idLivro}
              onClick={openModal}
              className="text-white  h-full backdrop-blur-sm shadow-inner flex flex-col justify-between"
            >
              {capas.map((capa, index_) => {
                if (index == index_) {
                  return (
                    <img
                      onClick={() => {
                        setLivroInfo({
                          img: capa,
                          sinopse: livro.Sinopse,
                          title: livro.Nome_Livro,
                          idLivro: livro.idLivro,
                          qntNota: livro.Quantidade_Nota,
                        });
                      }}
                      key={index}
                      src={capa}
                      alt={capa}
                      className="h-[150px] rounded-xl"
                    />
                  );
                }
              })}
              <div className="flex items-center justify-center text-center gap-1">
                <AiFillStar size={22} className=" text-yellow-400"></AiFillStar>
                <span className=" font-bold">{`${
                  livro.Média_Nota == null
                    ? "0.00"
                    : livro.Média_Nota.toFixed(2)
                }`}</span>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>

      <ModalLivro
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        livro={livroInfo}
      ></ModalLivro>
    </div>
  );
};

export default LivroSwiper;
