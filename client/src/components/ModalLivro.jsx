import React from "react";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";

import Axios from "axios";

Modal.setAppElement("#root");

const ModalLivro = ({ closeModal, modalIsOpen, livro }) => {
  const [avaliacoes, setAvaliacoes] = useState();
  const [qntNota, setQntNota] = useState();

  const handleRatingClick = (Nota, idLivro) => {
    Axios.post("http://localhost:3001/insertAvaliacoes", {
      Nota: Nota,
      idLivro: idLivro,
    }).then(() => {
      alert("Avaliação Adicionada!");
      setTimeout(() => {
        document.location.reload();
      }, 400);
    });
  };

  const handleEditRating = (Nota, id) => {
    Axios.put("http://localhost:3001/edit", {
      idAvaliação: id,
      Nota: Nota,
    }).then((response) => {});
  };

  const handleDeleteRating = (id, Nota) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then(() => {
      setAvaliacoes(
        avaliacoes.filter((value) => {
          return value.idAvaliação != id;
        })
      );
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/getAvaliacoes").then((response) => {
      setAvaliacoes(response.data);

      console.log(response.data);
    });
  }, []);

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
        <SwiperSlide className="px-4 pb-4  items-center justify-start flex flex-col overflow-hidden overflow-y-visible text-justify ">
          <div className=" fixed flex flex-col items-center justify-center bg-[#457975] w-full h-[70px] z-10 ">
            <h1 className="text-white font-bold text-lg">Avaliação</h1>

            <div className="rating ">
              <input
                type="radio"
                name="rating-1"
                className=" mask mask-star-2 bg-yellow-400"
                defaultChecked
                onClick={() => {
                  handleRatingClick(
                    1,
                    typeof livro !== "undefined" && livro.idLivro
                  );
                }}
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star-2 bg-yellow-400"
                onClick={() => {
                  handleRatingClick(
                    2,
                    typeof livro !== "undefined" && livro.idLivro
                  );
                }}
              />
              <input
                type="radio"
                name="rating-1"
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
                name="rating-1"
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
                name="rating-1"
                className="mask mask-star-2 bg-yellow-400"
                onClick={() => {
                  handleRatingClick(
                    5,
                    typeof livro !== "undefined" && livro.idLivro
                  );
                }}
              />
            </div>
          </div>

          <div className="pt-[75px] flex flex-col gap-4 text-center justify-center items-center">
            <span className="text-white font-bold">
              Total: {typeof livro !== "undefined" && livro.qntNota}
            </span>
            {typeof avaliacoes !== "undefined" &&
              avaliacoes.map((avaliacao, index) => {
                if (
                  avaliacao.idLivro ==
                  (typeof livro !== "undefined" && livro.idLivro)
                ) {
                  return (
                    <div
                      key={avaliacao.idAvaliação}
                      className="flex gap-4 items-center justify-center "
                    >
                      <span>{avaliacao.Nota}</span>
                      <div className="rating rating-sm">
                        <input
                          defaultChecked={avaliacao.Nota == 1 ? true : false}
                          type="radio"
                          name={index}
                          className=" mask mask-star-2 bg-yellow-400"
                          onClick={() => {
                            handleEditRating(
                              1,
                              typeof avaliacao !== "undefined" &&
                                avaliacao.idAvaliação
                            );
                          }}
                        />
                        <input
                          type="radio"
                          name={index}
                          className="mask mask-star-2 bg-yellow-400"
                          defaultChecked={avaliacao.Nota == 2 ? true : false}
                          onClick={() => {
                            handleEditRating(
                              2,
                              typeof avaliacao !== "undefined" &&
                                avaliacao.idAvaliação
                            );
                          }}
                        />
                        <input
                          defaultChecked={avaliacao.Nota == 3 ? true : false}
                          type="radio"
                          name={index}
                          className="mask mask-star-2 bg-yellow-400"
                          onClick={() => {
                            handleEditRating(
                              3,
                              typeof avaliacao !== "undefined" &&
                                avaliacao.idAvaliação
                            );
                          }}
                        />
                        <input
                          defaultChecked={avaliacao.Nota == 4 ? true : false}
                          type="radio"
                          name={index}
                          className="mask mask-star-2 bg-yellow-400"
                          onClick={() => {
                            handleEditRating(
                              4,
                              typeof avaliacao !== "undefined" &&
                                avaliacao.idAvaliação
                            );
                          }}
                        />
                        <input
                          defaultChecked={avaliacao.Nota == 5 ? true : false}
                          type="radio"
                          name={index}
                          className="mask mask-star-2 bg-yellow-400"
                          onClick={() => {
                            handleEditRating(
                              5,
                              typeof avaliacao !== "undefined" &&
                                avaliacao.idAvaliação
                            );
                          }}
                        />
                      </div>
                      <AiOutlineClose
                        size={25}
                        color="red"
                        onClick={() => {
                          handleDeleteRating(avaliacao.idAvaliação);
                        }}
                      ></AiOutlineClose>
                    </div>
                  );
                }
              })}
          </div>
        </SwiperSlide>
      </Swiper>
    </Modal>
  );
};

export default ModalLivro;
