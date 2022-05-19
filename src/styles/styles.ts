import styled from "styled-components";

type Align = "center" | "left" | "right";
const FormWrapper = styled.form`
  display: flex;
`;

const AddButton = styled.button`
  padding: 1em 2em;
  font-size: 1em;
  background: #64b5f6;
  color: #fafafa;
  max-width: 150px;
  border-radius: 4px;
  border: none;
  &:hover {
    cursor: pointer;
    background: #1e88e5;
    box-shadow: 1px 2px 4px 1px #9e9e9e;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const AddContact = styled.section`
  max-width: 70vw;
  height: 100%;
  margin: 0 3em;
`;

const Container = styled.div`
  display: flex;
  flex-flow: row;
  width: 100%;
`;

type IBox = {
  w: "full" | "part";
};
const Box = styled.div<IBox>`
  display: flex;
  flex-flow: column;
  margin: 15px 10px;
  box-shadow: 0px 0px 12px 3px #dedede;
  align-items: center;
  justify-content: space-between;
  width: ${({ w }) => (w === "full" ? "100%" : "70%")};
`;

type IText = {
  size: "sm" | "md" | "lg" | "xl";
  variant: "text" | "danger" | "info" | "warning";
  align: Align;
};
const Text = styled.p<IText>`
  font-size: ${(props) => {
    switch (props.size) {
      case "sm":
        return "0.8em";
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
      default:
        return "#9E9E9E";
    }
  }};
`;

const Aside = styled.aside`
  height: 100vh;
  display: flex;
  width: 30vw;
  flex-flow: column;
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

  svg {
    max-width: 10px;

    margin-top: 1.2em;
  }
`;

const ContactPhotoContainer = styled.div`
  width: 2em;
  border-radius: 50%;
  height: 2em;
  border: 2px solid red;
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
  svg {
    width: 3em;
    height: 3em;
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
  justify-content: center;
  align-items: end;
  div {
    background: #ef5350;
    width: 5em;
    height: 5em;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.7em;
    &:hover {
      cursor: pointer;
      box-shadow: 1px 2px 4px 1px #9e9e9e;
    }
  }
  svg {
    width: 3em;
    height: 3em;
  }
`;

export {
  AddButton,
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
  FormWrapper,
  H2Title,
  Text,
  TextContainer,
  Wrapper,
};

