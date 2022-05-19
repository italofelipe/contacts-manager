import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  Button,
  CreateContactInner,
  CreateContactLower,
  CreateContactUpper,
  FormWrapper,
  Text,
  TextInput
} from "../styles/styles";

type CreateContactProps = {
  onClose: () => void;
};

type ContactFields = Omit<Contact, "imageUrl">;
const CreateContact = ({ onClose }: CreateContactProps) => {
  const [contact, setContact] = useState<ContactFields>({
    email: "",
    name: "",
    phone: "",
  });

  const handleButtonEnable = (schema: ContactFields) => {
    if (!schema.email || !schema.name || !schema.phone) return true;
    return false;
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
        <FormWrapper>
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
          data-testid="create-button"
          disabled={handleButtonEnable(contact)}
          context="create"
        >
          Create
        </Button>
      </CreateContactLower>
    </>
  );
};

export default CreateContact;
