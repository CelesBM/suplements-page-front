import styled from "styled-components";

export const ModalOverlayStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Fondo oscuro para el modal */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalStyled = styled.div`
  background-color: #131311;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

export const ModalSpanStyled = styled.div`
  text-align: center;
  font-size: 12px;
  color: #efb810;

  @media (min-width: 768px) {
    font-size: 15px;
  }
`;

export const ModalCloseStyled = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

export const ModalOverlayRemoveStyled = styled.div`
  background-color: rgba(0, 0, 0, 0.5); /* Fondo oscuro para el modal */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalRemoveStyled = styled.div`
  background-color: #131311;
  padding: 5px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;
