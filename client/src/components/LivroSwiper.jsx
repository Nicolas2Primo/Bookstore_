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
        className="w-screen h-[100px] text-center"
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
              className="text-white w-[full] h-[50px] backdrop-blur-sm shadow-inner"
            >
              {livro.Nome_Livro}
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
