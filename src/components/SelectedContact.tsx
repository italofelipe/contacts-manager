import { faClose, faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  ContactCard,
  ContactCardInnerContent,
  ContactCardLower,
  ContactCardUpper,
  RoundedButton,
  Text
} from "../styles/styles";
import CreateContact from "./CreateContact";

type SelectedContactsProps = {
  onDelete: () => void;
  onClose: () => void;
  selectedContact: Contact;
  onCreate: Function;
};
const SelectedContact = ({
  onClose,
  onCreate,
  onDelete,
  selectedContact,
}: SelectedContactsProps) => {
  const [update, setUpdate] = useState(false);

  return (
    <>
      <ContactCardUpper>
        <FontAwesomeIcon onClick={() => onClose()} icon={faClose} size="xs" />
      </ContactCardUpper>
      <ContactCard>
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
          <>
            {!update && (
              <RoundedButton variant="update">
                <FontAwesomeIcon
                  onClick={() => setUpdate(!update)}
                  icon={faPencil}
                  size="xs"
                />
              </RoundedButton>
            )}
          </>
          <RoundedButton variant="delete">
            <FontAwesomeIcon
              onClick={() => onDelete()}
              icon={faTrash}
              size="xs"
            />
          </RoundedButton>
        </ContactCardLower>
      </ContactCard>
    </>
  );
};

export default SelectedContact;
