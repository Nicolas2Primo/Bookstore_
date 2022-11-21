import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";

Modal.setAppElement("#root");

const ModalLivro = ({ closeModal, modalIsOpen, livro }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="MovieInfo"
      overLayClassName="modal-overlay"
      className="modal-content outline-none "
    >
      <div className="flex items-center justify-center w-screen h-screen bg-black bg-opacity-50 backdrop-blur-sm backdrop-opacity-10">
        <div className="absolute px-4 py-2 h-[200px] w-64 rounded-2xl bg-[#457975] flex flex-col items-center">
          <div className="flex flex-row-reverse items-end w-full ">
            <AiOutlineClose
              size={30}
              onClick={closeModal}
              className="text-white hover:cursor-pointer "
            ></AiOutlineClose>
          </div>
          <button>Adicionar</button>
          <button>Remover</button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalLivro;
