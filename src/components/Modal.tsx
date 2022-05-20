import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactModal from "react-modal";
import { ModalHeader, Text } from "../styles/styles";

type ModalProps = {
  title: string;
  text: string;
  isOpen: boolean;
  onClose: (status: boolean) => void;
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "#81c784",
    width: "25rem",
    height: "18rem",
  },
};

const Modal = ({ title, text, isOpen, onClose }: ModalProps) => {
  return (
    <ReactModal style={customStyles} isOpen={isOpen}>
      <ModalHeader>
        <FontAwesomeIcon
          onClick={() => onClose(isOpen)}
          icon={faClose}
          size="xs"
          fill="#F5F5F5"
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
    </ReactModal>
  );
};
export default Modal;
