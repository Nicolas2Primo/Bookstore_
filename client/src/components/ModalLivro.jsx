import React from "react";
import { useState } from "react";
import Modal from "react-modal";

import { Swiper, SwiperSlide } from "swiper/react";

import Axios from "axios";

Modal.setAppElement("#root");

const ModalLivro = ({ closeModal, modalIsOpen, livro }) => {
  const handleRatingClick = (Nota, idLivro) => {
    Axios.post("http://localhost:3001/avaliacoes", {
      Nota: Nota,
      idLivro: idLivro,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="MovieInfo"
      overLayClassName="modal-overlay"
      className="modal-content outline-none w-screen h-screen flex justify-center items-center bg-black bg-opacity-50 "
    >
      <div className="w-screen h-screen absolute " onClick={closeModal}></div>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="w-[200px] h-[300px] rounded-xl bg-[#457975] bg-opacity-80"
        pagination={{
          clickable: true,
        }}
      >
        <SwiperSlide>
          <img
            src={typeof livro !== "undefined" && livro.img}
            alt=""
            className="h-full w-full"
          />
        </SwiperSlide>
        <SwiperSlide className=" overflow-hidden overflow-y-visible px-4 py-4 text-justify">
          <h1 className="font-bold text-white text-lg">Sinopse</h1>
          <span className="text-white text-sm">
            {typeof livro !== "undefined" && livro.sinopse}
          </span>
        </SwiperSlide>
        <SwiperSlide className="px-4 py-4 items-center justify-center flex flex-col ">
          <h1 className="text-white font-bold text-lg">Avaliação</h1>
          <div className="rating ">
            <input
              type="radio"
              name="rating-4"
              className=" mask mask-star-2 bg-yellow-400"
              onClick={() => {
                handleRatingClick(
                  1,
                  typeof livro !== "undefined" && livro.idLivro
                );
              }}
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-yellow-400"
              defaultChecked
              onClick={() => {
                handleRatingClick(
                  2,
                  typeof livro !== "undefined" && livro.idLivro
                );
              }}
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-yellow-400"
              onClick={() => {
                handleRatingClick(
                  3,
                  typeof livro !== "undefined" && livro.idLivro
                );
              }}
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-yellow-400"
              onClick={() => {
                handleRatingClick(
                  4,
                  typeof livro !== "undefined" && livro.idLivro
                );
              }}
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-yellow-400"
              onClick={() => {
                handleRatingClick(
                  5,
                  typeof livro !== "undefined" && livro.idLivro
                );
              }}
            />
          </div>

          <span className="text-white font-bold">
            {typeof livro !== "undefined" && livro.qntNota}
          </span>
        </SwiperSlide>
      </Swiper>
    </Modal>
  );
};

export default ModalLivro;
