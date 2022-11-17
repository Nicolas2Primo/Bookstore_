import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import "swiper/css";

const LivroSwiper = () => {
  const [livros, setLivros] = useState();

  useEffect(() => {
    Axios.get("http://localhost:3001/getLivros").then((response) => {
      setLivros(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <Swiper
      className="w-screen"
      spaceBetween={1}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {typeof livros !== "undefined" &&
        livros.map((livro) => (
          <SwiperSlide key={livro.idLivro} className="text-white">
            {livro.Nome_Livro}
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default LivroSwiper;
