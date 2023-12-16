import React from "react";
import { useState } from "react";
import {
  ModalOverlayStyled,
  ModalStyled,
  ModalSpanStyled,
  ModalCloseStyled,
  ModalOverlayRemoveStyled,
  ModalRemoveStyled,
} from "./ModalStyles";

export const ModalBuy = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <ModalOverlayStyled>
      <ModalStyled>
        <ModalSpanStyled>
          <ModalCloseStyled onClick={() => setShowModal(false)}>
            &times;
          </ModalCloseStyled>
          <p>Producto añadido al carrito</p>
        </ModalSpanStyled>
      </ModalStyled>
    </ModalOverlayStyled>
  );
};

export const ModalRemoveOneProduct = () => {
  const [showProductRemovedModal, setShowProductRemovedModal] = useState(false);

  return (
    <ModalOverlayRemoveStyled>
      <ModalRemoveStyled>
        <ModalSpanStyled>
          <ModalCloseStyled onClick={() => setShowProductRemovedModal(false)}>
            &times;
          </ModalCloseStyled>
          <p>Producto Eliminado</p>
        </ModalSpanStyled>
      </ModalRemoveStyled>
    </ModalOverlayRemoveStyled>
  );
};

export const ModalRemoveAllProducts = () => {
  const [showEmptyCartModal, setShowEmptyCartModal] = useState(false);

  return (
    <ModalOverlayStyled>
      <ModalStyled>
        <ModalSpanStyled>
          <ModalCloseStyled onClick={() => setShowEmptyCartModal(false)}>
            &times;
          </ModalCloseStyled>
          <p>Carrito vaciado</p>
        </ModalSpanStyled>
      </ModalStyled>
    </ModalOverlayStyled>
  );
};

export const ModalSuccessBuy = () => {
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);

  return (
    <ModalOverlayStyled>
      <ModalStyled>
        <ModalSpanStyled>
          <ModalCloseStyled onClick={() => setShowPurchaseModal(false)}>
            &times;
          </ModalCloseStyled>
          <p>Compra finalizada</p>
        </ModalSpanStyled>
      </ModalStyled>
    </ModalOverlayStyled>
  );
};

export const ModalContact = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <ModalOverlayStyled>
      <ModalStyled>
        <ModalSpanStyled>
          <ModalCloseStyled onClick={() => setShowContactModal(false)}>
            &times;
          </ModalCloseStyled>
          <p>Mensaje enviado con éxito!</p>
        </ModalSpanStyled>
      </ModalStyled>
    </ModalOverlayStyled>
  );
};
