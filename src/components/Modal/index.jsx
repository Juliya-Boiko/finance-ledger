import { ModalBackdrop, ModalContent, ModalTitle } from "./Modal.styled";
import { ButtonModal } from "../buttons/ButtonModal";

export const Modal = ({ onClick }) => {
  return (
    <ModalBackdrop>
      <ModalContent>
        <ModalTitle>Thank you!</ModalTitle>
        <p>Youre form submission has been recieved</p>
        <ButtonModal type="button" title="Back to our site" onClick={onClick} />
      </ModalContent>
    </ModalBackdrop>
  );
};