import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import ModalLivro from "./ModalLivro";
import LivroContext from "./LivroContext";
import { useContext } from "react";

import Axios from "axios";
import "swiper/css";

const LivroSwiper = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [capaModal, setCapaModal] = useState();
  const { livro } = useContext(LivroContext);
  const { sizeScreen } = useContext(LivroContext);
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
    console.log(sizeScreen);
  };
  const closeModal = () => {
    setIsOpen(false);

    document.location.reload();
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center px-[3px] lg:px-[9px] sticky">
      <Swiper
        className={`w-screen h-[180px] text-center sm:h-[220px] lg:h-[360px]  `}
        loop={true}
        spaceBetween={sizeScreen.innerWidth >= 1024 ? 30 : 10}
        slidesPerView={
          sizeScreen.innerWidth >= 450 && sizeScreen.innerWidth < 640
            ? 4
            : sizeScreen.innerWidth >= 640 && sizeScreen.innerWidth < 1024
            ? 5
            : sizeScreen.innerWidth >= 1024
            ? 6
            : 3
        }
      >
        {typeof livro !== "undefined" &&
          livro.map((obj, index) => (
            <SwiperSlide
              key={obj.idLivro}
              onClick={openModal}
              className="text-white  h-full backdrop-blur-sm shadow-inner flex flex-col justify-between rounded-2xl hover:cursor-pointer hover:scale-[1.005] "
            >
              {capas.map((capa, index_) => {
                if (index == index_) {
                  return (
                    <img
                      onClick={() => {
                        setCapaModal({
                          img: capa,
                          idLivro: obj.idLivro,
                        });
                      }}
                      key={index}
                      src={capa}
                      alt={capa}
                      className="h-[150px] rounded-xl sm:h-[190px] lg:h-[330px]  "
                    />
                  );
                }
              })}
              <div className="flex items-center justify-center text-center gap-1">
                <AiFillStar size={22} className=" text-yellow-400"></AiFillStar>
                <span className=" font-bold">{`${
                  obj.Média_Nota == null ? "0.00" : obj.Média_Nota.toFixed(2)
                }`}</span>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>

      <ModalLivro
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        livroInfo={capaModal}
      ></ModalLivro>
    </div>
  );
};

export default LivroSwiper;
