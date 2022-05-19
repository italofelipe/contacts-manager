import styled from "styled-components";

const FormWrapper = styled.form`
  display: flex;
`;

const AddButton = styled.button`
  padding: 1em 2em;
  font-size: 1em;
  background: #64b5f6;
  color: #fafafa;
  max-width: 150px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 100%;
  margin: 2em;
`;

const AddContact = styled.section`
  max-width: 70vw;
  height: 100%;
  margin: 0 3em;
`

const Container = styled.div`
  display: flex;
  flex-flow: row;
  
`;

const Box = styled.div`
  display: flex;
  flex-flow: column;
  margin: 15px 10px;
  box-shadow: 3px 3px 3px 15px #dedede;
`;

type IText = {
  size: "sm" | "md" | "lg" | "xl";
  variant: "text" | "caption" | "info" | "warning";
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
`;
export { AddButton, AddContact, Box, Container, FormWrapper, Text, Wrapper };

