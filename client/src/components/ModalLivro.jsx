import React from "react";
import { useContext } from "react";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import LivroContext from "./LivroContext";
import RatingContext from "./RatingContext";

import Axios from "axios";

Modal.setAppElement("#root");

const ModalLivro = ({ closeModal, modalIsOpen, livroInfo }) => {
  const { avaliacoes } = useContext(RatingContext);
  const { setAvaliacoes } = useContext(RatingContext);
  const { livro } = useContext(LivroContext);
  const { setLivro } = useContext(LivroContext);

  const handleRatingClick = (Nota) => {
    Axios.post("http://localhost:3001/insertAvaliacoes", {
      Nota: Nota,
      Livro_idLivro: livroInfo.idLivro,
    }).then((response0) => {
      setAvaliacoes([
        ...avaliacoes,
        {
          idAvaliação: response0.data.insertId,
          Nota: Nota,
          Livro_idLivro: livroInfo.idLivro,
        },
      ]);

      setLivro(
        livro.map((obj) => {
          if (
            obj.idLivro ==
            (typeof livroInfo !== "undefined" && livroInfo.idLivro)
          ) {
            return { ...obj, Quantidade_Nota: obj.Quantidade_Nota + 1 };
          } else {
            return obj;
          }
        })
      );
    });
  };

  const handleEditRating = (Nota, id) => {
    Axios.put("http://localhost:3001/edit", {
      idAvaliação: id,
      Nota: Nota,
    }).then((response) => {
      setAvaliacoes(
        avaliacoes.map((obj) => {
          if (obj.idAvaliação == (typeof id !== "undefined" && id)) {
            return { ...obj, Nota: Nota };
          } else {
            return obj;
          }
        })
      );
    });
  };

  const handleDeleteRating = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then(() => {
      setAvaliacoes(
        avaliacoes.filter((value) => {
          return value.idAvaliação != id;
        })
      );
      setLivro(
        livro.map((obj) => {
          if (
            obj.idLivro ==
            (typeof livroInfo !== "undefined" && livroInfo.idLivro)
          ) {
            return { ...obj, Quantidade_Nota: obj.Quantidade_Nota - 1 };
          } else {
            return obj;
          }
        })
      );
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
        className="w-[200px] h-[300px] rounded-xl bg-[#457975] bg-opacity-80 lg:w-[280px] lg:h-[400px]"
      >
        <SwiperSlide className="hover:cursor-pointer">
          <img
            src={typeof livroInfo !== "undefined" && livroInfo.img}
            alt=""
            className="h-full w-full"
          />
        </SwiperSlide>
        <SwiperSlide className=" overflow-hidden overflow-y-visible px-4 py-4 text-justify ">
          <h1 className="font-bold text-white text-lg">Sinopse</h1>
          <span className="text-white text-sm">
            {typeof livro !== "undefined" &&
              livro.map((obj) => {
                if (
                  obj.idLivro ==
                  (typeof livroInfo !== "undefined" && livroInfo.idLivro)
                ) {
                  return obj.Sinopse;
                }
              })}
          </span>
        </SwiperSlide>
        <SwiperSlide className="px-4 pb-4  items-center justify-start flex flex-col overflow-hidden overflow-y-visible text-justify  ">
          <div className=" fixed flex flex-col items-center justify-center bg-[#457975] w-full h-[70px] z-10 lg:h-[90px] ">
            <h1 className="text-white font-bold text-lg">Avaliação</h1>

            <div className="rating ">
              <input
                type="radio"
                name="rating-1"
                className=" mask mask-star-2 bg-yellow-400 hover:scale-110"
                defaultChecked
                onClick={() => {
                  handleRatingClick(1);
                }}
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star-2 bg-yellow-400 hover:scale-110"
                onClick={() => {
                  handleRatingClick(2);
                }}
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star-2 bg-yellow-400 hover:scale-110"
                onClick={() => {
                  handleRatingClick(3);
                }}
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star-2 bg-yellow-400 hover:scale-110"
                onClick={() => {
                  handleRatingClick(4);
                }}
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star-2 bg-yellow-400 hover:scale-110"
                onClick={() => {
                  handleRatingClick(5);
                }}
              />
            </div>

            <div className="text-white font-bold">
              <span>
                Total:{" "}
                {typeof livro !== "undefined" &&
                  livro.map((obj) => {
                    if (
                      obj.idLivro ==
                      (typeof livroInfo !== "undefined" && livroInfo.idLivro)
                    ) {
                      return obj.Quantidade_Nota;
                    }
                  })}{" "}
              </span>
            </div>
          </div>

          <div className="pt-[75px] lg:pt-[100px] flex flex-col gap-4 text-center justify-center items-center">
            {typeof avaliacoes !== "undefined" &&
              avaliacoes.map((avaliacao, index) => {
                if (
                  (typeof avaliacao !== "undefined" &&
                    avaliacao.Livro_idLivro) ==
                  (typeof livroInfo !== "undefined" && livroInfo.idLivro)
                ) {
                  return (
                    <div
                      key={avaliacao.idAvaliação}
                      className="flex gap-2 items-center justify-center "
                    >
                      <span>{avaliacao.Nota}</span>
                      <div className="rating rating-sm">
                        <input
                          defaultChecked={avaliacao.Nota == 1 ? true : false}
                          type="radio"
                          name={index}
                          className=" mask mask-star-2 bg-yellow-400 hover:scale-110 "
                          onClick={() => {
                            handleEditRating(1, avaliacao.idAvaliação);
                          }}
                        />
                        <input
                          type="radio"
                          name={index}
                          className="mask mask-star-2 bg-yellow-400 hover:scale-110"
                          defaultChecked={avaliacao.Nota == 2 ? true : false}
                          onClick={() => {
                            handleEditRating(
                              2,

                              avaliacao.idAvaliação
                            );
                          }}
                        />
                        <input
                          defaultChecked={avaliacao.Nota == 3 ? true : false}
                          type="radio"
                          name={index}
                          className="mask mask-star-2 bg-yellow-400 hover:scale-110"
                          onClick={() => {
                            handleEditRating(
                              3,

                              avaliacao.idAvaliação
                            );
                          }}
                        />
                        <input
                          defaultChecked={avaliacao.Nota == 4 ? true : false}
                          type="radio"
                          name={index}
                          className="mask mask-star-2 bg-yellow-400 hover:scale-110"
                          onClick={() => {
                            handleEditRating(
                              4,

                              avaliacao.idAvaliação
                            );
                          }}
                        />
                        <input
                          defaultChecked={avaliacao.Nota == 5 ? true : false}
                          type="radio"
                          name={index}
                          className="mask mask-star-2 bg-yellow-400 hover:scale-110"
                          onClick={() => {
                            handleEditRating(
                              5,

                              avaliacao.idAvaliação
                            );
                          }}
                        />
                      </div>
                      <AiOutlineClose
                        size={20}
                        color="red"
                        onClick={() => {
                          handleDeleteRating(avaliacao.idAvaliação);
                        }}
                        className="hover:scale-110 hover:cursor-pointer"
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
