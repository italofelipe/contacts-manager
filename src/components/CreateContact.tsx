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
  onCreate: Function;
};

const CreateContact = ({ onClose, onCreate }: CreateContactProps) => {
  const [contact, setContact] = useState<ContactFields>({
    email: "",
    name: "",
    phone: "",
  });
  const [successfulSubmit, setSuccessfulSubmit] = useState<boolean | null>(
    null
  );

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
      .then((APIResponse) => {
        setSuccessfulSubmit(true);
      })
      .catch((err) => setSuccessfulSubmit(false));
    onCreate();
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
      </CreateContactLower>

      <Modal
        onClose={(status) => setSuccessfulSubmit(!status)}
        title={successfulSubmit ? "Success!" : "Opps"}
        isOpen={successfulSubmit!}
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
