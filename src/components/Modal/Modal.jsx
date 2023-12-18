import React, { useState } from "react";
import {
  ModalOverlayStyled,
  ModalStyled,
  ModalSpanStyled,
  ModalCloseStyled,
  ModalOverlayRemoveStyled,
  ModalRemoveStyled,
} from "./ModalStyles";

// Comprar en la sección Products:
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

// Remover con ícono "basura":
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

// Vaciar el carrito:
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

// Finalizar compra:
export const ModalSuccessBuy = () => {
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);

  return (
    <ModalOverlayStyled>
      <ModalStyled>
        <ModalSpanStyled>
          <ModalCloseStyled onClick={() => setShowPurchaseModal(false)}>
            &times;
          </ModalCloseStyled>
          <p>Compra finalizada con éxito!</p>
        </ModalSpanStyled>
      </ModalStyled>
    </ModalOverlayStyled>
  );
};

// Mensaje enviado en la seccion Contact:
export const ModalContact = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <ModalOverlayStyled>
      <ModalStyled>
        <ModalSpanStyled>
          <ModalCloseStyled onClick={() => setShowContactModal(false)}>
            &times;
          </ModalCloseStyled>
          <p>
            Mensaje enviado con éxito! <br /> En estos días será respondido
          </p>
        </ModalSpanStyled>
      </ModalStyled>
    </ModalOverlayStyled>
  );
};
