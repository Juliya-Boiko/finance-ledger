import styled from "styled-components";

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${p => p.theme.colors.brand.black};
`;

export const ModalContent = styled.div`
  padding: 16px;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${p => p.theme.colors.brand.white};
`;

export const ModalTitle = styled.p`
  margin: 0 0 16px 0;
  font-weight: ${p => p.theme.fontWeight.medium};
  font-size: 20px;
`;