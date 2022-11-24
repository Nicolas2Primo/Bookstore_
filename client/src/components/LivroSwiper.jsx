import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useState } from "react";
import ModalLivro from "./ModalLivro";
import Axios from "axios";
import "swiper/css";

const LivroSwiper = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [livros, setLivros] = useState();
  const [livroInfo, setLivroInfo] = useState();
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
        className="w-screen h-[150px] text-center"
        spaceBetween={10}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {typeof livros !== "undefined" &&
          livros.map((livro) => (
            <SwiperSlide
              key={livro.idLivro}
              onClick={openModal}
              className="text-white  h-full backdrop-blur-sm shadow-inner flex flex-col justify-between"
            >
              <span>{livro.Nome_Livro}</span>
              <div className="flex flex-col">
                <span>{`QNT: ${livro.Quantidade_Nota}`}</span>
                <span className="">{`AVG: ${livro.Média_Nota.toFixed(
                  2
                )}`}</span>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      <ModalLivro
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      ></ModalLivro>
    </div>
  );
};

export default LivroSwiper;
