import { faClose, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  Button,
  ContactCard,
  ContactCardInnerContent,
  ContactCardLower,
  ContactCardUpper,
  Text
} from "../styles/styles";
import CreateContact from "./CreateContact";

type SelectedContactsProps = {
  onDelete: () => void;
  onUpdate: () => void;
  onClose: () => void;
  selectedContact: Contact;
  onCreate: Function;
};
const SelectedContact = ({
  onClose,
  onCreate,
  onDelete,
  onUpdate,
  selectedContact,
}: SelectedContactsProps) => {
  console.log("SelectedContact", selectedContact);
  const [update, setUpdate] = useState(false);

  return (
    <>
      <ContactCardUpper>
        <FontAwesomeIcon onClick={() => onClose()} icon={faClose} size="xs" />
      </ContactCardUpper>
      <ContactCard>
        <button onClick={() => setUpdate(!update)}>Editar</button>
        <ContactCardInnerContent>
          {update ? null : (
            <>
              <Text size="lg" align="center" variant="text">
                {selectedContact.name}
              </Text>
              <Text size="lg" align="center" variant="info">
                {selectedContact.phone}
              </Text>
              <Text size="lg" align="center" variant="info">
                {selectedContact.email}
              </Text>
            </>
          )}

          {update && (
            <CreateContact
              defaultValues={selectedContact}
              onClose={() => setUpdate(!update)}
              onCreate={onCreate}
              context="update"
            />
          )}
        </ContactCardInnerContent>

        <ContactCardLower>
          <div>
            <Button
              context="add"
              onClick={() => onUpdate()}
              data-testid="add-contact-button"
            >
              Update Contact
            </Button>
          </div>
          <div>
            <FontAwesomeIcon
              onClick={() => onDelete()}
              icon={faTrash}
              size="xs"
            />
          </div>
        </ContactCardLower>
      </ContactCard>
    </>
  );
};

export default SelectedContact;
