import ReactModal from "react-modal";
import styled from "styled-components";

type Align = "center" | "left" | "right";
const FormWrapper = styled.form`
  display: flex;
  flex-flow: column;
`;

const mediaQueries = {
  xsMin: "320",
  xsMax: "576",
  smMin: "577",
  smMax: "768",
  mdMin: "769",
  mdMax: "1023",
  lgMin: "1024",
  lgMax: "1376",
  xlMin: "1377",
};

type IButton = {
  context: "create" | "add";
};
const Button = styled.button<IButton>`
  padding: 0.6em 2em;
  font-size: 1em;
  background: ${({ context }) => (context === "add" ? "#6C63FF" : "#43A047")};
  color: #fafafa;
  font-weight: bold;
  max-width: 10rem;
  border-radius: 6em;
  border: none;
  &:hover {
    cursor: pointer;
    background: ${({ context }) =>
      context === "add" ? "##1e88e5" : "#2E7D32"};

    box-shadow: 1px 2px 4px 1px #9e9e9e;
  }
  &:disabled {
    background: #9e9e9e;
    cursor: default;
    pointer-events: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  @media (min-width: ${mediaQueries.xsMin}px) and (max-width: ${mediaQueries.xsMax}px) {
    flex-direction: column;
  }
`;

const AddContact = styled.section`
  max-width: 70vw;
  height: 100%;
  margin: 0 3em;
  min-width: 25vw;
  @media (min-width: ${mediaQueries.xsMin}px) and (max-width: ${mediaQueries.xsMax}px) {
    width: 100vw;
    margin-top: 3em;
  }
`;

const Container = styled.div`
  display: flex;
  flex-flow: row;
  width: 100%;
  height: 100vh;
`;

type IBox = {
  w: "full" | "part";
  disabled: boolean;
  updateContact: boolean;
};
const Box = styled.div<IBox>`
  display: flex;
  width: ${({ w }) => (w === "full" ? "100%" : "70%")};
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  padding: 1.2em;
  box-shadow: 0px 0px 12px 3px #dedede;
  opacity: ${({ disabled }) => (disabled ? "0.45" : "unset")};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "unset")};

  @media (min-width: ${mediaQueries.xsMin}px) and (max-width: ${mediaQueries.smMin}px) {
    display: ${({ updateContact }) => (updateContact ? "flex" : "none")};
  }
`;

type IText = {
  size: "xs" | "sm" | "md" | "lg" | "xl";
  variant: "text" | "danger" | "info" | "warning" | "white";
  align: Align;
};
const Text = styled.p<IText>`
  font-size: ${(props) => {
    switch (props.size) {
      case "xs":
        return "0.75rem";
      case "sm":
        return "1em";
      case "md":
        return "1.4em";
      case "lg":
        return "2em";
      default:
        return "2.4em";
    }
  }};
  text-align: ${(props) => props.align};
  margin: 0.5em 0 0 0.2em;
  color: ${({ variant }) => {
    switch (variant) {
      case "text":
        return "#212121";
      case "danger":
        return "#EF5350";
      case "warning":
        return "#FFA726";
      case "white":
        return "#F5F5F5";
      default:
        return "#9E9E9E";
    }
  }};
`;

type IAside = {
  disabled: boolean;
};
const Aside = styled.aside<IAside>`
  height: 100vh;
  display: flex;
  width: 40vw;
  flex-flow: column;
  opacity: ${({ disabled }) => (disabled ? "0.45" : "unset")};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "unset")};

  @media (min-width: ${mediaQueries.xsMin}px) and (max-width: ${mediaQueries.xsMax}px) {
    width: 100%;
    height: auto;
    &.disabled {
      display: none;
    }
  }
  @media (min-width: ${mediaQueries.smMin}px) and (max-width: ${mediaQueries.smMax}px) {
    width: 80vw;
    &.disabled {
      display: none;
    }
  }
  ul {
    overflow: auto;
  }
`;

type ITitle = {
  align: Align;
};

const H2Title = styled.h2<ITitle>`
  text-align: ${({ align }) => align};
  font-size: 1.6em;
`;

const TextContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
`;
const Contact = styled.div`
  display: flex;
  flex-flow: row;
  &:hover {
    cursor: pointer;
    background-color: #81c784;
  }
`;

const ContactLeft = styled.div`
  width: 20%;
  display: flex;
  padding-left: 0.3em;
  flex-flow: column;
  justify-content: center;
`;
const ContactCenter = styled.div`
  width: 60%;
  display: flex;
  flex-flow: column;
  justify-content: left;
  padding: 0.25em;
`;
const ContactRight = styled.div`
  width: 20%;
  display: flex;
  flex-flow: row;

  align-items: center;
  justify-content: end;
  padding-right: 1em;

  svg {
    max-width: 0.6rem;
    margin-top: 1rem;
  }
`;

type ContactPhotoContainerProps = {
  photo: string;
};
const ContactPhotoContainer = styled.div<ContactPhotoContainerProps>`
  width: 2.85em;
  border-radius: 50%;
  height: 2.85em;
  background: url(${(props) => props.photo});
  background-size: cover;
`;

const ContactCard = styled.div`
  width: 70%;
  height: 70%;
  display: flex;
  flex-flow: column;
`;
const ContactCardUpper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row;
  justify-content: flex-end;
  margin-right: 5em;
  svg {
    width: 3em;
    height: 3em;
    &:hover {
      cursor: pointer;
    }
  }
`;

const ContactCardInnerContent = styled.div`
  display: flex;
  flex-flow: column;
`;
const ContactCardLower = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 25%;
  svg {
    width: 3em;
    height: 3em;
  }
`;
const TextInput = styled.input`
  background: none;
  border: none;
  border-bottom: 1px solid #9e9e9e;
  margin: 15px 0;
  padding: 0.5em;

  &:focus {
    border-bottom: 2px solid #6c63ff;
    border: none;
  }
`;

const CreateContactUpper = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-content: center;
  svg {
    max-width: 10px;
    margin-top: 1.2em;

    &:hover {
      cursor: pointer;
    }
  }
  @media (min-width: ${mediaQueries.xsMin}px) and (max-width: ${mediaQueries.xsMax}px) {
    justify-content: space-between;
    align-items: center;
    align-content: center;
    svg {
      margin: 0;
    }
  }
`;
const CreateContactInner = styled.div`
  display: flex;
  flex-flow: column;
`;
const CreateContactLower = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;

  img {
    opacity: 0.6;
  }
`;

const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row;
  justify-content: flex-end;
  svg {
    max-width: 10px;
    fill: #f5f5f5;
    &:hover {
      cursor: pointer;
    }
  }
`;

type IRoundedButton = {
  variant: "update" | "delete" | "add";
};
const RoundedButton = styled.button<IRoundedButton>`
  margin-top: 3em;
  background: ${({ variant }) =>
    variant === "delete"
      ? "#ef5350"
      : variant === "add"
      ? "#64b5f6"
      : "#43A047"};
  width: 5em;
  height: 5em;
  border-radius: 50%;
  border-color: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.7em;
  color: #f5f5f5;
  border: unset;
  &:hover {
    cursor: pointer;
    box-shadow: 1px 2px 4px 1px #9e9e9e;
  }
  &.add-responsive {
    display: none;

    @media (min-width: ${mediaQueries.xsMin}px) and (max-width: ${mediaQueries.xsMax}px) {
      display: flex;
      align-self: flex-end;
    }
  }
`;

ReactModal.setAppElement("body");

const StyledModal = styled<any>(ReactModal)`
  position: absolute;
  border: 1px solid rgb(204, 204, 204);
  border-radius: 4px;
  outline: none;
  padding: 20px;
  width: 25rem;
  max-height: 35vh;
  right: 30vw;
  top: 25vh;
  border: 2px solid #81c784;
  background-color: #81c784;

  @media (min-width: ${mediaQueries.xsMin}px) and (max-width: ${mediaQueries.xsMax}px) {
    right: 2.5rem;

  }
  @media (min-width: ${mediaQueries.smMin}px) and (max-width: ${mediaQueries.smMax}px) {
    right: 5.5rem;

  }
`;

export {
  Button,
  AddContact,
  Aside,
  Box,
  Contact,
  ContactCard,
  ContactCardInnerContent,
  ContactCardLower,
  ContactCardUpper,
  ContactLeft,
  ContactCenter,
  ContactRight,
  ContactPhotoContainer,
  Container,
  CreateContactUpper,
  CreateContactInner,
  CreateContactLower,
  RoundedButton,
  FormWrapper,
  H2Title,
  ModalHeader,
  StyledModal,
  Text,
  TextInput,
  TextContainer,
  Wrapper,
};

