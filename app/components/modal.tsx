"use client";

import React, { useEffect, useRef, useState } from "react";

interface Props {
  isOpen: boolean;
  hasCloseBtn?: boolean;
  children: React.ReactNode;
}

function Modal({ isOpen, hasCloseBtn, children }: Props) {
  const [isModalOpen, setModalOpen] = useState(isOpen);
  const modalRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    const modalElement = modalRef.current;

    if (modalElement) {
      if (isModalOpen) {
        modalElement.showModal();
      } else {
        modalElement.close();
      }
    }
  }, [isModalOpen]);

  function closeModal() {
    modalRef.current?.close();
    setModalOpen(false);
  }

  // function handleOnclick(event: MouseEvent) {
  //   if (modalRef.current && !event.composedPath().includes(modalRef.current)) {
  //     closeModal();
  //   }
  // }

  function handleKeyDown(event: React.KeyboardEvent<HTMLDialogElement>) {
    if (event.key === "Escape") {
      closeModal();
    }
  }

  return (
    <dialog className="" ref={modalRef} onKeyDown={handleKeyDown}>
      {hasCloseBtn && <button onClick={closeModal}>X</button>}
      {children}
    </dialog>
  );
}

export default Modal;
