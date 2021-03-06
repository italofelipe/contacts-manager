import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ModalHeader, StyledModal, Text } from "../styles/styles";

type ModalProps = {
  title: string;
  text: string;
  isOpen: boolean | null;
  onClose: (status: boolean) => void;
};

const Modal = ({ isOpen, onClose, title, text }: ModalProps) => {
  return (
    <StyledModal testId="modal" isOpen={isOpen!}>
      <ModalHeader>
        <FontAwesomeIcon
          onClick={() => onClose(isOpen!)}
          icon={faClose}
          size="xs"
          fill="#F5F5F5"
          data-testId="close-modal-icon"
        />
      </ModalHeader>

      <Text align="center" size="lg" variant="white">
        {title}
      </Text>

      <div className="wrapper">
        <svg
          className="checkmark"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52 52"
        >
          <circle
            className="checkmark__circle"
            cx="26"
            cy="26"
            r="25"
            fill="none"
          />
          <path
            className="checkmark__check"
            fill="none"
            d="M14.1 27.2l7.1 7.2 16.7-16.8"
          />
        </svg>
      </div>

      <Text align="center" size="sm" variant="white">
        {text}
      </Text>
    </StyledModal>
  );
};
export default Modal;
