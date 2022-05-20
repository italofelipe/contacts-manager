import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormEvent, useState } from "react";
import { axiosCallHandler } from "../infra/axiosHelper";
import {
  Button,
  CreateContactInner,
  CreateContactLower,
  CreateContactUpper,
  FormWrapper,
  Text,
  TextInput
} from "../styles/styles";
import Modal from "./Modal";

type CreateContactProps = {
  onClose: () => void;
};

const CreateContact = ({ onClose }: CreateContactProps) => {
  const [contact, setContact] = useState<ContactFields>({
    email: "",
    name: "",
    phone: "",
  });
  const [successfulSubmit, setSuccessfulSubmit] = useState<boolean | null>(
    null
  );

  const [modalOpened, setModalOpened] = useState<boolean>(false);
  const handleButtonEnable = (schema: ContactFields) => {
    if (!schema.email || !schema.name || !schema.phone) return true;
    return false;
  };

  const handleSubmit = (formEvent: FormEvent) => {
    formEvent.preventDefault();
    axiosCallHandler({
      method: "post",
      data: {
        email: contact.email,
        phone: contact.phone,
        name: contact.name,
      },
    })
      .then((APIResponse) => console.log("res", APIResponse))
      .catch((err) => console.log("Err", err));
    setContact({ email: "", name: "", phone: "" });
  };
  return (
    <>
      <CreateContactUpper>
        <Text align="center" size="md" variant="info">
          Add a new contact
        </Text>
        <FontAwesomeIcon onClick={() => onClose()} icon={faClose} size="xs" />
      </CreateContactUpper>

      <CreateContactInner>
        <FormWrapper onSubmit={(formEvent) => handleSubmit(formEvent)}>
          <TextInput
            placeholder="Thanos"
            type="text"
            maxLength={40}
            name={contact.name}
            value={contact.name}
            onChange={(e) => setContact({ ...contact, name: e.target.value })}
            autoFocus
            data-testid="field-name"
          />
          <TextInput
            placeholder="thanos@darkorder.unv"
            type="text"
            maxLength={40}
            name={contact.email}
            value={contact.email}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
            data-testid="field-email"
          />
          <TextInput
            placeholder="+ 55 11 122234"
            type="text"
            maxLength={20}
            name={contact.phone}
            value={contact.phone}
            onChange={(e) => setContact({ ...contact, phone: e.target.value })}
            data-testid="field-phone"
          />
        </FormWrapper>
      </CreateContactInner>
      <CreateContactLower>
        <Button
          type="submit"
          onClick={(e) => handleSubmit(e)}
          data-testid="create-button"
          disabled={handleButtonEnable(contact)}
          context="create"
        >
          Create
        </Button>

        <Button onClick={() => setModalOpened(true)} context="create">
          Abrir modal
        </Button>
      </CreateContactLower>

      <Modal
        onClose={(status) => setModalOpened(!status)}
        title={successfulSubmit ? "Success!" : "Opps"}
        isOpen={modalOpened}
        text={
          successfulSubmit
            ? "Have you already thought on what will be the matter of your first talk with the contact you just created? What about Pagaleve?"
            : "Opps"
        }
      />
    </>
  );
};

export default CreateContact;
